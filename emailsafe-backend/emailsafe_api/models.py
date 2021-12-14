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
    
    def __str__(self):
        return f"{self.contents}"
    

