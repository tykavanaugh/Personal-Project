from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from .models import EmailItem

## Serializes current user
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username','is_staff','last_login','date_joined','email']


#Custom Serializers

class EmailItemSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(default=serializers.CurrentUserDefault())
    class Meta:
        model = EmailItem
        fields = ['envelope','headers','plain','html','reply_plain','attachments','user']

