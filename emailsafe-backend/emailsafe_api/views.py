import json
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
from django.http import HttpResponse
from .virustotalAPI import scan_attachment


#Views
class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class EmailItemViewSet(viewsets.ModelViewSet):
    print(scan_attachment(11)) #TEST REMOVE ONE VT API DONE
    permission_classes = (AllowAny,)
    serializer_class = EmailItemSerializer
    def get_queryset(self):
        return self.request.user.user_emails.all()


