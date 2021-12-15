from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import EmailItem
from django.contrib.auth.models import User
from .serializers import UserSerializer,UserSerializerWithToken,EmailItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializerWithToken(request.user)
    return Response(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EmailListViewSet(viewsets.ModelViewSet):
    queryset = EmailItem.objects.all()
    serializer_class = EmailItemSerializer

class EmailItemViewSet(viewsets.ModelViewSet):
    queryset = EmailItem.objects.all()
    serializer_class = EmailItemSerializer

