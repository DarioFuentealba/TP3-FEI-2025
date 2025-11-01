from rest_framework import serializers
from .models import CarritoItem
from django.conf import settings

class CarritoItemSerializer(serializers.ModelSerializer):
    nombre = serializers.SerializerMethodField()
    precio = serializers.SerializerMethodField()
    foto = serializers.SerializerMethodField()
    categoria = serializers.SerializerMethodField()

    class Meta:
        model = CarritoItem
        fields = ["id", "nombre", "precio", "cantidad", "categoria", "foto", "object_id"]

    def get_nombre(self, obj):
        return getattr(obj.producto, "nombre", "Sin nombre")

    def get_precio(self, obj):
        return getattr(obj.producto, "precio", 0)

    def get_categoria(self, obj):
        if hasattr(obj.producto, "subcategoria"):
            return getattr(obj.producto.subcategoria, "nombre", None)
        return None

    def get_foto(self, obj):
        if hasattr(obj.producto, "foto1") and obj.producto.foto1:
            return settings.MEDIA_URL + str(obj.producto.foto1)
        return None
