from django.db import models
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
    timestamp = models.DateTimeField(default = now())
    envelope = models.JSONField(default=dict,null=True,blank=True)
    headers = models.JSONField(default=dict,null=True,blank=True)
    plain = models.JSONField(default=dict,null=True,blank=True)
    html = models.JSONField(default=dict,null=True,blank=True)
    reply_plain = models.JSONField(default=dict,null=True,blank=True)
    attachments = models.JSONField(default=dict,null=True,blank=True)
    
    def __str__(self):
        return f"{self.id}: From {self.sender} on {self.timestamp}"

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
        return (results['data']['attributes']['stats'])

    def save(self, *args, **kwargs):
        self.sender = self.extractSender()
        #delete existing
        try:
            if self.report:
                Report.objects.get(pk=self.report.pk).delete()
        except:
            pass
        report = Report(parent_email = self)
        #scan report if exists
        try:
            report.attachment_report = self.scan_attachment()
            report.attachment_missing = False
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
    attachment_missing = models.BooleanField(default=True,blank=True,null=True)