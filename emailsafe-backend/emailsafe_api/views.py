from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import EmailItem,EmailList
from django.contrib.auth.models import User
from .serializers import UserSerializer,UserSerializerWithToken,EmailItemSerializer,EmailListSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EmailListViewSet(viewsets.ModelViewSet):
    queryset = EmailList.objects.all()
    serializer_class = EmailListSerializer

class EmailItemViewSet(viewsets.ModelViewSet):
    queryset = EmailItem.objects.all()
    serializer_class = EmailItemSerializer

