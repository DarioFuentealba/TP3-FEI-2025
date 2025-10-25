from django.db.models.signals import post_migrate
from django.contrib.auth.models import Group
from django.dispatch import receiver

@receiver(post_migrate)
def crear_grupos_base(sender, **kwargs):
    # Lista de grupos base
    grupos = ["administrador", "cliente", "empleado"]

    for nombre in grupos:
        Group.objects.get_or_create(name=nombre)
