from django.shortcuts import render
from .models import (Categoria,SubCategoria,Cpu, Motherboard, Gabinete, Ram, Disco, Fuente, 
                     Monitor, Mouse, Teclado, Gpu,Cooler, PcEscritorio, Notebook,Paquete_office,
                     Placa_wifi,Sistema_operativo)
from .serializers import (ProductoGenericoSerializer,CategoriaSerializer,CategoriaConSubCategoriaSerializer,
                          SubCategoriaSerializer, CpuSerializer, PlacaMadreSerializer, 
                          GabineteSerializer, RamSerializer, DiscoSerializer, FuenteSerializer, 
                          MonitorSerializer, MouseSerializer, 
                          TecladoSerializer, GPUSerializer,CoolerSerializer,
                          PcEscritorioSerializer,NotebookSerializer, PaqueteOfficeSerializer,
                          SistemaOperativoSerializer,PlacaWifiSerializer)
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
#from rest_framework.permissions import ProductoPermiso # Solo para hacer las pruebas en test.py
#from .permissions import ProductoPermiso, SoloAdminEditarPermiso
from .mixins import ComprarMixin
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes=[]

class SubCategoriaViewSet(viewsets.ModelViewSet):
    queryset = SubCategoria.objects.all()
    serializer_class = SubCategoriaSerializer
    permission_classes=[]


class CpuViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Cpu.objects.all()
    serializer_class = CpuSerializer
    permission_classes=[]


class PlacaMadreViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Motherboard.objects.all()
    serializer_class = PlacaMadreSerializer
    permission_classes=[]

class GabineteViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Gabinete.objects.all()
    serializer_class = GabineteSerializer
    permission_classes=[]

class RamViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Ram.objects.all()
    serializer_class = RamSerializer
    permission_classes=[]

class DiscoViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Disco.objects.all()
    serializer_class = DiscoSerializer
    permission_classes=[]

class FuenteViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Fuente.objects.all()
    serializer_class = FuenteSerializer
    permission_classes=[]

class MonitorViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Monitor.objects.all()
    serializer_class = MonitorSerializer
    permission_classes=[]

class MouseViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Mouse.objects.all()
    serializer_class = MouseSerializer
    permission_classes=[]

class TecladoViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Teclado.objects.all()
    serializer_class = TecladoSerializer
    permission_classes=[]

class GpuViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Gpu.objects.all()
    serializer_class = GPUSerializer
    permission_classes=[]

class CoolerViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Cooler.objects.all()
    serializer_class = CoolerSerializer
    permission_classes=[]

class PcEscritorioViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = PcEscritorio.objects.all()
    serializer_class = PcEscritorioSerializer
    permission_classes=[]

class NotebookViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer
    permission_classes=[]
class PaqueteOfficeViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Paquete_office.objects.all()
    serializer_class = PaqueteOfficeSerializer
    permission_classes=[]
class SistemaOperativoViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Sistema_operativo.objects.all()
    serializer_class = SistemaOperativoSerializer
    permission_classes=[]
class PlacaWifiViewSet(ComprarMixin,viewsets.ModelViewSet):
    queryset = Placa_wifi.objects.all()
    serializer_class = PlacaWifiSerializer
    permission_classes=[]


class CategoriaConSubCategoriaListView(ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class=CategoriaConSubCategoriaSerializer
    permission_classes=[]


@api_view(['GET'])
@permission_classes([AllowAny])
def listar_todos_los_productos(request):
    # Obtener todos los objetos de cada modelo hijo
    modelos = [Cpu, Ram, Cooler, Motherboard, Gabinete, Disco, Fuente, Monitor, Mouse, Teclado, Gpu, PcEscritorio, Notebook,Placa_wifi,Paquete_office,Sistema_operativo]
    productos = []

    for modelo in modelos:
        objetos = modelo.objects.all()
        productos.extend(objetos)

    # Serializar todos los productos usando ProductoGenericoSerializer
    serializer = ProductoGenericoSerializer(productos, many=True)
    return Response(serializer.data)


class SoloAdminView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Verificar si el usuario es administrador
        if not request.user.is_staff:
            return Response({"error": "No tienes permiso para acceder"}, status=403)
        
        return Response({"mensaje": "Bienvenido administrador"})
