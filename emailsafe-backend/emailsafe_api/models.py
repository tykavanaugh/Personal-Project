from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now


# Create your models here.

class EmailList(models.Model):
    user = models.ForeignKey(User, related_name="emails_list",on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user}'s email list"

class EmailItem(models.Model):
    #list = models.ForeignKey(EmailList,related_name='emails',on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default = now())
    envelope = models.JSONField(default=dict,null=True)
    headers = models.JSONField(default=dict,null=True)
    plain = models.JSONField(default=dict,null=True)
    html = models.JSONField(default=dict,null=True)
    reply_plain = models.JSONField(default=dict,null=True)
    attachments = models.JSONField(default=dict,null=True)
    
    def __str__(self):
        return f"{self.plain}"
    

