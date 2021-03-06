from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from .models import EmailItem,Report

## Serializes current user
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username','is_staff','last_login','date_joined','email']


#Custom Serializers

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['pk','sender_email','sender_domain','domain_report','attachment_report','is_phish_url']

class EmailItemSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(default=serializers.CurrentUserDefault())
    report = ReportSerializer(required=False)
    class Meta:
        model = EmailItem
        fields = ['pk','envelope','headers','plain','html','reply_plain','attachments','user','report']



