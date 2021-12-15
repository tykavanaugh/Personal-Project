from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from django.urls import path,include
from .views import UserViewSet,EmailItemViewSet,current_user,TestView

router = routers.DefaultRouter()

urlpatterns = [
    path("login", obtain_jwt_token),
    path("current_user",current_user,name="current_user"),
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls')),
    path("testhello", TestView.as_view(), name="testhello")
]

router.register(r"users",UserViewSet,basename='user')

router.register(r"email",EmailItemViewSet,basename="email")

urlpatterns += router.urls