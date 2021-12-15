from django.contrib import admin
from .models import EmailItem
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm,UserChangeForm
from .models import User

# Register your models here.

admin.site.register(EmailItem)

