from django.db import models
import django
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE, SET_DEFAULT
from django.utils.timezone import now
import os
import virustotal3.core
import json
from emailsafe.APIKEYS import VIRUSTOTAL_API_KEY

from email import parser
import re

from email.parser import HeaderParser
from email.utils import parseaddr
parser = HeaderParser()

#Helpers API functions


# Create your models here.

class EmailItem(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_emails',null=True,blank=True)
    sender = models.CharField(max_length=1000,null=True,blank=True)
    timestamp = models.DateField(default=django.utils.timezone.now)
    envelope = models.JSONField(default=dict,null=True,blank=True)
    headers = models.JSONField(default=dict,null=True,blank=True)
    plain = models.JSONField(default=dict,null=True,blank=True)
    html = models.JSONField(default=dict,null=True,blank=True)
    reply_plain = models.JSONField(default=dict,null=True,blank=True)
    attachments = models.JSONField(default=dict,null=True,blank=True)
    
    def __str__(self):
        return f"{self.id}: From {self.sender} on {self.timestamp}"

    def extractOGSender(self):
        body = self.plain
        pattern = re.compile("(?<=\<)(.*)(?=\>)",re.IGNORECASE)
        email = pattern.search(body).group(0)
        return email

    def extractSender(self):
        email = self.headers['from']
        nameAndEmail = str(parser.parsestr(email))
        pattern = re.compile("(?<=\<)(.*)(?=\>)",re.IGNORECASE)
        email = pattern.search(nameAndEmail).group(0)
        return email

    def scan_attachment(self):
        email_item = self
        attachments = email_item.attachments
        attachment_raw = ""
        for attachment in attachments:
            attachment_raw += str(attachment['content'])
        with open(f"./tmp/{email_item}.txt","w") as file:
            file.write(attachment_raw)
        vt_files = virustotal3.core.Files(VIRUSTOTAL_API_KEY)
        report_result = vt_files.upload(f"./tmp/{email_item}.txt")
        results = virustotal3.core.get_analysis(VIRUSTOTAL_API_KEY,report_result['data']['id'])
        os.system('rm -r ./tmp/*')
        return (results['data']['attributes']['stats'])    

    #All interaction with virustotal API in here
    def save(self, *args, **kwargs):
        self.sender = self.extractSender()
        #delete existing
        try:
            if self.report:
                Report.objects.get(pk=self.report.pk).delete()
        except:
            pass
        report = Report(parent_email = self)
        #scan attachment report if exists
        try:
            report.attachment_report = self.scan_attachment()
        except:
            pass
        #extract sender from body
        try:
            report.sender_email = self.extractOGSender()
        except:
            pass
        report.save()
        try:
            self.user = User.objects.get(email=self.sender)
        except:
            pass
        super(EmailItem, self).save()
        
    
class Report(models.Model):
    parent_email = models.OneToOneField(EmailItem,on_delete=CASCADE,related_name="report")
    attachment_report = models.JSONField(default=dict,null=True,blank=True)
    sender_email = models.CharField(max_length=1000,default="",null=True,blank=True)
    sender_domain = models.CharField(max_length=1000,default="",null=True,blank=True)
    domain_report = models.JSONField(default=dict,null=True,blank=True)
    is_phish_url = models.BooleanField(null=True,default=None)

    def get_domain_report(self):
        vt_domain = virustotal3.core.Domains(VIRUSTOTAL_API_KEY)
        result = vt_domain.info_domain(self.sender_domain)['data']['attributes']['last_analysis_stats']
        return result

    def check_phishtank(self):
        path="./database_offline/phishtank.json"
        data = None
        with open(path,'r') as jsonfile:
            data = json.load(jsonfile)
        for item in data:
            if self.sender_domain in item["url"]:
                return True
        return False
    
    def __str__(self):
        return(f'{self.pk}: Report for: {self.parent_email}')

    def save(self,*args,**kwargs):
        #pull reports that pull from domain/email address
        self.sender_domain = self.sender_domain = self.sender_email[self.sender_email.find("@")+1:]
        if "@" in self.sender_email:
            self.domain_report = self.get_domain_report()
            self.is_phish_url = self.check_phishtank()
        super(Report, self).save()