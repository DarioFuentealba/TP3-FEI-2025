from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Rol, Menu
from django.contrib.auth.password_validation import validate_password

# Serializer para registro y detalle de usuarios
class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'email', 'first_name', 'last_name', 'password', 'password2']
        extra_kwargs = {
            'url': {'view_name': 'usuario-detail', 'lookup_field': 'pk'},
            'first_name': {'required': False, 'allow_blank': True},
            'last_name': {'required': False, 'allow_blank': True},
            'email': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden"})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            password=validated_data['password']
        )
        return user
    
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()
        return instance



# Usa Serializer para crear las realciones 1 a muchos y muchos a muchos
#los serializers.HyperlinkedRelatedField 
# crean un campo que representa la relación mediante un enlace.
# En los casos de muchos a muchos ni es necesario definir el modelo intermedio.
class RolSerializer(serializers.HyperlinkedModelSerializer):
    usuarios = serializers.HyperlinkedRelatedField(many=True,
        read_only=True,
        view_name='usuario-detail')
    class Meta:
        model = Rol
        fields = ['id', 'nombre','usuarios']

class MenuSerializer(serializers.HyperlinkedModelSerializer):
    roles = serializers.HyperlinkedRelatedField(many=True,
        read_only=True,
        view_name='rol-detail')
    class Meta:
        model=Menu
        fields = ['id', 'nombre', 'url', 'icono','roles']

