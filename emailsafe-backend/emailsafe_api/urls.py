from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from django.urls import path,include
from .views import EmailItemViewSet

router = routers.DefaultRouter()

urlpatterns = [
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls')),
]

router.register(r"email",EmailItemViewSet,basename="email")

urlpatterns += router.urls