from django.shortcuts import render
from rest_framework import serializers, viewsets
from rest_framework import permissions
from .models import EmailItem
from django.contrib.auth.models import User
from .serializers import UserSerializer,UserSerializerWithToken,EmailItemSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class TestView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self,request):
        content = {'message':'Hello world'}
        return Response(content)

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializerWithToken(request.user)
    return Response(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EmailItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = EmailItemSerializer
    
    def get_queryset(self):
        return self.request.user.user_emails.all()


    

