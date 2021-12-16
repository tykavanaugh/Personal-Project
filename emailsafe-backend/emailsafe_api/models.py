from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

from email import parser
import re

from email.parser import HeaderParser
from email.utils import parseaddr
parser = HeaderParser()

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
        return f"{self.plain}"

    def extractSender(self):
        email = self.headers['from']
        nameAndEmail = str(parser.parsestr(email))
        pattern = re.compile("(?<=\<)(.*)(?=\>)",re.IGNORECASE)
        email = pattern.search(nameAndEmail).group(0)
        return email

    def save(self, *args, **kwargs):
        self.sender = self.extractSender()
        try:
            self.user = User.objects.get(email=self.sender)
        except:
            pass
        super(EmailItem, self).save()
    

