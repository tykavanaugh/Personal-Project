from django.contrib import admin
from .models import EmailList,EmailItem

# Register your models here.

admin.site.register(EmailItem)
admin.site.register(EmailList)