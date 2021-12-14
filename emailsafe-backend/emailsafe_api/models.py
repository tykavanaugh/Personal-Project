from django.db import models
from django.contrib.auth.models import User
import datetime


# Create your models here.

class EmailList(models.Model):
    user = models.ForeignKey(User, related_name="emails_list",on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user}'s email list"

class EmailItem(models.Model):
    list = models.ForeignKey(EmailList,related_name='emails',on_delete=models.CASCADE)
    contents = models.TextField()
    timestamp = models.DateTimeField(datetime.datetime.now())
    envelope = models.CharField(max_length=2056)
    headers = models.CharField(max_length=2056)
    plain = models.CharField(max_length=2056)
    html = models.CharField(max_length=2056)
    reply_plain = models.CharField(max_length=2056)
    attachments = models.CharField(max_length=2056)
    
    def __str__(self):
        return f"{self.plain}"
    

