from rest_framework import routers
from django.urls import path,include
from .views import EmailItemViewSet,CurrentUserView

router = routers.DefaultRouter()

urlpatterns = [
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls')),
    path('current_user/',CurrentUserView.as_view(),name="current_user"),
]

router.register(r"email",EmailItemViewSet,basename="email")



urlpatterns += router.urls