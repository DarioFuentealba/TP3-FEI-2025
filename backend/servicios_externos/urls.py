from django.urls import path
from . import views

urlpatterns = [
    path('convertir-moneda/', views.convertir_moneda, name='convertir_moneda'),
]
