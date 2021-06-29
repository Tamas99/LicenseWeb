from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('trajectory', index),
    path('bezier', index)
]
