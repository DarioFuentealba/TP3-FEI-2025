from rest_framework import serializers
from .models import CarritoItem
from computacion.serializers import (CpuSerializer, PlacaMadreSerializer, GabineteSerializer, RamSerializer, DiscoSerializer, FuenteSerializer,MonitorSerializer, 
                                    MouseSerializer, TecladoSerializer, GPUSerializer,CoolerSerializer,
                                    PcEscritorioSerializer, NotebookSerializer,PaqueteOfficeSerializer,PlacaWifiSerializer,SistemaOperativoSerializer)
from computacion.models import (Cpu, Motherboard, Gabinete, Ram, Disco, Fuente, Monitor, Mouse, Teclado,
                                Gpu,Cooler,PcEscritorio, Notebook,Paquete_office,Placa_wifi,Sistema_operativo)

from django.conf import settings
import os

class CarritoItemSerializer(serializers.HyperlinkedModelSerializer):
    nombre = serializers.SerializerMethodField()
    precio = serializers.SerializerMethodField()
    foto = serializers.SerializerMethodField()
    producto_id=serializers.SerializerMethodField()
    categoria=serializers.SerializerMethodField()

    class Meta:
        model = CarritoItem
        fields = ["id", "nombre", "precio","cantidad", "categoria", "foto", "producto_id"]

    
    def get_nombre(self,obj):
        # Devuelve el nombre del producto relacionado
        if obj.producto:
            return getattr(obj.producto,'nombre','Sin nombre')
        return None
    
    def get_precio(self,obj):
        # Devuelve el precio del producto
        if obj.producto:
            return getattr(obj.producto,'precio',None)
        return None
    
    def get_categoria(self,obj):
        # Precion del producto
        if obj.producto:
            return getattr(obj.producto,'categoria',None)
        return None
    
    def get_foto(self, obj):
        if obj.producto:
            foto = getattr(obj.producto,'foto1', None)
            if foto:
                # Construye la URL completa
                return settings.MEDIA_URL + str(foto)
        return None    
    
    def get_producto_id(self, obj):
        return obj.producto_id


# class CarritoItemSerializer(serializers.ModelSerializer):
#     nombre = serializers.SerializerMethodField()
#     precio = serializers.SerializerMethodField()
#     foto = serializers.SerializerMethodField()

#     class Meta:
#         model = CarritoItem
#         fields = ["id", "cantidad", "modelo", "producto_id", "nombre", "precio", "foto"]

#     def get_nombre(self, obj):
#         try:
#             return getattr(obj.get_producto(), "nombre", "Desconocido")
#         except:
#             return "Desconocido"

#     def get_precio(self, obj):
#         try:
#             return getattr(obj.get_producto(), "precio", 0)
#         except:
#             return 0

#     def get_foto(self, obj):
#         try:
#             producto = obj.get_producto()
#             if not producto:
#                 return None
#             foto = getattr(producto, "foto1", None)
#             return foto.url if foto else None
#         except Exception as e:
#             print("Error en get_foto:", e)
#             return None




#from rest_framework import serializers#
#from .models import CarritoItem, Producto

#class ProductoSerializer(serializers.ModelSerializer):
    #class Meta:
    #    model = Producto
    #    fields = ["id", "nombre", "precio"]

#class CarritoItemSerializer(serializers.ModelSerializer):
    #producto_nombre = serializers.CharField(source='producto.nombre', read_only=True)
    #producto_precio = serializers.DecimalField(source='producto.precio', max_digits=10, decimal_places=2, read_only=True)
    #producto_id = serializers.IntegerField(source='producto.id', read_only=True)

    #class Meta:
    #    model = CarritoItem
    #    fields = ['id', 'producto_id', 'producto_nombre', 'producto_precio', 'cantidad']
