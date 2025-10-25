from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class CarritoItem(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.PositiveIntegerField(null=True, blank=True)
    producto = GenericForeignKey('content_type', 'object_id')
    cantidad = models.PositiveIntegerField(default=1)

    modelo = models.CharField(max_length=50)
    producto_id = models.PositiveIntegerField()

    def get_producto(self):
        from computacion.models import Notebook, Gpu, Fuente, Cooler, Motherboard, Disco, Ram, PcEscritorio
        MODELOS = {
            "notebook": Notebook,
            "notebooks": Notebook,
            "gpu": Gpu,
            "gpus": Gpu,
            "fuente": Fuente,
            "fuentes": Fuente,
            "cooler": Cooler,
            "coolers": Cooler,
            "motherboard": Motherboard,
            "motherboards": Motherboard,
            "disco": Disco,
            "discos": Disco,
            "ram": Ram,
            "rams": Ram,
            "pc_escritorio": PcEscritorio,
            "pc_escritorios": PcEscritorio,
        }

        Modelo = MODELOS.get(self.modelo.lower())
        if not Modelo:
            return None
        try:
            return Modelo.objects.get(id=self.producto_id)
        except Modelo.DoesNotExist:
            return None



# from django.db import models
# from django.contrib.auth.models import User
# from django.contrib.contenttypes.models import ContentType
# from django.contrib.contenttypes.fields import GenericForeignKey

# #class CarritoItem(models.Model):
#  #   usuario = models.ForeignKey(User, on_delete=models.CASCADE)
#   #  #modelo = models.CharField(max_length=50)
#    # content_type=models.ForeignKey(ContentType, on_delete=models.CASCADE)
#     #object_id=models.PositiveIntegerField()
#     #producto = GenericForeignKey('content_type', 'object_id')
#     #cantidad = models.PositiveIntegerField(default=1)

# class CarritoItem(models.Model):
#     usuario = models.ForeignKey(User, on_delete=models.CASCADE)
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
#     object_id = models.PositiveIntegerField(null=True, blank=True)
#     producto = GenericForeignKey('content_type', 'object_id')
#     cantidad = models.PositiveIntegerField(default=1)

#     # def get_producto(self):
#     #     from computacion.models import Notebook, Gpu, Fuente, Cooler, Motherboard, Disco, Ram, PcEscritorio
#     #     MODELOS = {
#     #         "notebook": Notebook,
#     #         "notebooks": Notebook,
#     #         "gpu": Gpu,
#     #         "gpus": Gpu,
#     #         "fuente": Fuente,
#     #         "fuentes": Fuente,
#     #         "cooler": Cooler,
#     #         "coolers": Cooler,
#     #         "motherboard": Motherboard,
#     #         "motherboards": Motherboard,
#     #         "disco": Disco,
#     #         "discos": Disco,
#     #         "ram": Ram,
#     #         "rams": Ram,
#     #         "pc_escritorio": PcEscritorio,
#     #         "pc_escritorios": PcEscritorio,
#     #     }

#     #     #print("Buscando producto:", self.modelo.lower(), self.producto_id)
#     modelo = models.CharField(max_length=50)
#     producto_id = models.PositiveIntegerField()

#     def get_producto(self):
#         from computacion.models import Notebook, Gpu, Fuente, Cooler, Motherboard, Disco, Ram, PcEscritorio
#         MODELOS = {
#             "notebook": Notebook,
#             "notebooks": Notebook,
#             "gpu": Gpu,
#             "gpus": Gpu,
#             "fuente": Fuente,
#             "fuentes": Fuente,
#             "cooler": Cooler,
#             "coolers": Cooler,
#             "motherboard": Motherboard,
#             "motherboards": Motherboard,
#             "disco": Disco,
#             "discos": Disco,
#             "ram": Ram,
#             "rams": Ram,
#             "pc_escritorio": PcEscritorio,
#             "pc_escritorios": PcEscritorio,
#         }

#         #print("Buscando producto:", self.modelo.lower(), self.producto_id)

#         Modelo = MODELOS.get(self.modelo.lower())
#         if not Modelo:
#             return None
#         try:
#             return Modelo.objects.get(id=self.producto_id)
#         except Modelo.DoesNotExist:
#             return None

# #class CarritoItem(models.Model):
# #    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
# #    modelo = models.CharField(max_length=50, default="desconocido")
# #    producto_id = models.IntegerField(default=0)
# #    cantidad = models.PositiveIntegerField(default=1)

# #    class Meta:
# #        unique_together = ("usuario", "modelo", "producto_id")

# #    def __str__(self):
# #        return f"{self.modelo} ({self.producto_id}) x{self.cantidad}"

#     #     Modelo = MODELOS.get(self.modelo.lower())
#     #     if not Modelo:
#     #         return None
#     #     try:
#     #         return Modelo.objects.get(id=self.producto_id)
#     #     except Modelo.DoesNotExist:
#     #         return None

# #from django.db import models
# #from django.contrib.auth.models import User

# #class Producto(models.Model):
# #    nombre = models.CharField(max_length=100)
# #    precio = models.DecimalField(max_digits=10, decimal_places=2)

# #class CarritoItem(models.Model):
# #    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name="carrito_items")
# #    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
# #    cantidad = models.PositiveIntegerField(default=1)

# #    class Meta:
# #        unique_together = ("usuario", "producto")
