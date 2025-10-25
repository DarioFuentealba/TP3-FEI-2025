from django.db import models
from django.contrib.auth.models import User

class Rol(models.Model):
    nombre = models.CharField(max_length=100)
    usuarios = models.ManyToManyField(User, through='UsuarioRol')

    def __str__(self):
        return self.nombre
    

class Menu(models.Model):
    nombre = models.CharField(max_length=100)
    url = models.CharField(max_length=255)
    icono = models.CharField(max_length=100, blank=True, null=True)
    roles = models.ManyToManyField(Rol, through='MenuRol')

    def __str__(self):
        return self.nombre
    

class MenuRol(models.Model):
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    

class UsuarioRol(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
