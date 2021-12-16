from django.shortcuts import render
from rest_framework import serializers, viewsets
from rest_framework import permissions
from .models import EmailItem
from django.contrib.auth.models import User
from .serializers import UserSerializer,EmailItemSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny


#Views
class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class EmailItemViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = EmailItemSerializer
    def get_queryset(self):
        return self.request.user.user_emails.all()


    

