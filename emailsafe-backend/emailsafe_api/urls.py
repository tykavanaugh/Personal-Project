from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from django.urls import path
from .views import UserViewSet,EmailItemViewSet,EmailListViewSet

router = routers.DefaultRouter()

urlpatterns = [
    path("login", obtain_jwt_token)
]

router.register(r"users",UserViewSet,basename='user')

router.register(r"email-list",EmailListViewSet,basename='email-list')

router.register(r"email",EmailItemViewSet,basename="email")

urlpatterns += router.urls