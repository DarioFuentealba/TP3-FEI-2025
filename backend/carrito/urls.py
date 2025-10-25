#from django.urls import path
#from .views import CarritoView, CarritoItemUpdateView, CarritoItemDeleteView

#urlpatterns = [
#    path("api/carrito/", CarritoView.as_view(), name="carrito"),
#    path("api/carrito/<int:id>/update/", CarritoItemUpdateView.as_view(), name="carrito-update"),
#    path("api/carrito/<int:id>/remove/", CarritoItemDeleteView.as_view(), name="carrito-remove"),
#]

from django.urls import path
from .views import CarritoView, CarritoItemUpdateView, CarritoItemDeleteView,generar_pdf
from .views import finalizar_compra

urlpatterns = [
    path('', CarritoView.as_view(), name='ver_carrito'),
    path('agregar/', CarritoView.as_view(), name='agregar_carrito'),
    path('<int:pk>/update/', CarritoItemUpdateView.as_view(), name='actualizar_item'),
    path('<int:id>/remove/', CarritoItemDeleteView.as_view(), name='eliminar_item'),
    path('pdf/', generar_pdf, name='pdf'),
    path('finalizar/', finalizar_compra, name='finalizar_compra'),
]


#urlpatterns = [
#    path('', CarritoView.as_view(), name="carrito"),  # GET y POST para lista/agregar
#    path('<int:id>/update/', CarritoItemUpdateView.as_view(), name="carrito-update"),
#    path('<int:id>/remove/', CarritoItemDeleteView.as_view(), name="carrito-remove"),
#]
