from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from .models import Interes,Perfil,PCEspecificacion,FavoritoProducto,UsuarioExtra
from .serializers import UsuarioSerializer,CustomTokenObtainPairSerializer
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action, api_view,permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import ProfileSerializer,ProfileUpdateSerializer,InteresesSerializer,PCEspecificacionSerializer,FavoritoProductoSerializer
from django.shortcuts import get_object_or_404
from django.contrib.contenttypes.models import ContentType
from rest_framework_simplejwt.views import TokenObtainPairView
from carrito.models import LocalidadArgentina





# Usaremos Viewsets para definir la logica de nuestras API REST
# Los Viewsets proporcionan una forma sencilla de manejar las operaciones CRUD (Crear, Leer,
# Actualizar, Eliminar) para nuestros modelos.
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer

    @action(detail=False, methods=["post"], permission_classes=[AllowAny])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": UsuarioSerializer(user, context={"request": request}).data,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def usuario_actual(request):
    user=request.user
    # perfil, _ = Perfil.objects.get_or_create(user=user)
    # user_serializer = UsuarioSerializer(perfil.user,context={'request':request})
    # perfil_serializer = UsuarioSerializer(perfil,context={'request':request})
    serializer=UsuarioSerializer(user,context={'request':request})
    # return Response({
    #     "id":user.id,
    #     "usaername":user.username,
    #     "is_superuser":user.is_superuser,
    #     "user":user_serializer.data,
    #     "perfil":perfil_serializer.data
    # })
    return Response(serializer.data)

# class RolViewSet(viewsets.ModelViewSet):
#     queryset = Rol.objects.all()
#     serializer_class = RolSerializer


# class MenuViewSet(viewsets.ModelViewSet):
#     queryset = Menu.objects.all()
#     serializer_class = MenuSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar perfiles de usuario
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Solo devuelve el perfil del usuario autenticado"""
        return Perfil.objects.filter(user=self.request.user)
    
    def get_object(self):
        """Obtiene el perfil del usuario autenticado"""
        perfil, created = Perfil.objects.get_or_create(user=self.request.user)
        return perfil

    
    def list(self, request):
        """GET /api/profile/ - Obtiene el perfil del usuario"""
        profile = self.get_object()
        serializer = self.get_serializer(profile)
        return Response(serializer.data)
    
    def update(self, request, pk=None):
        """PUT /api/profile/ - Actualiza el perfil completo"""
        profile = self.get_object()
        serializer = ProfileUpdateSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Devuelve el perfil completo actualizado
            full_serializer = ProfileSerializer(profile)
            return Response(full_serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def partial_update(self, request, pk=None):
        """PATCH /api/profile/ - Actualiza parcialmente el perfil"""
        profile = self.get_object()
        serializer = ProfileUpdateSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            full_serializer = ProfileSerializer(profile)
            return Response(full_serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        """GET /api/profile/me/ - Obtiene el perfil del usuario actual"""
        profile = self.get_object()
        serializer = self.get_serializer(profile)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def add_interest(self, request):
        """POST /api/profile/add_interest/ - Agrega un interés
        Body: {"name": "Gaming"}
        """
        profile = self.get_object()
        serializer = InteresesSerializer(data=request.data)
        if serializer.is_valid():
            Interes.objects.get_or_create(
                profile=profile,
                name=serializer.validated_data['name']
            )
            profile_serializer = ProfileSerializer(profile)
            return Response(profile_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['delete'])
    def remove_interest(self, request):
        """DELETE /api/profile/remove_interest/ - Elimina un interés
        Body: {"name": "Gaming"}
        """
        profile = self.get_object()
        name = request.data.get('name')
        if not name:
            return Response(
                {'error': 'El nombre del interés es requerido'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            interest = Interes.objects.get(profile=profile, name=name)
            interest.delete()
            profile_serializer = ProfileSerializer(profile)
            return Response(profile_serializer.data)
        except Interes.DoesNotExist:
            return Response(
                {'error': 'Interés no encontrado'},
                status=status.HTTP_404_NOT_FOUND
            )
    
    @action(detail=False, methods=['get', 'put', 'patch'])
    def pc_specs(self, request):
        """
        GET /api/profile/pc_specs/ - Obtiene las especificaciones del PC
        PUT /api/profile/pc_specs/ - Actualiza las especificaciones del PC
        PATCH /api/profile/pc_specs/ - Actualiza parcialmente las especificaciones
        
        Body para PUT/PATCH:
        {
            "cpu": 1,
            "gpu": 5,
            "ram": 3,
            "disco": 2,
            "motherboard": 4,
        }
        """
        profile = self.get_object()
        
        # Crear PCSpecification si no existe
        pc_spec, created = PCEspecificacion.objects.get_or_create(profile=profile)
        
        if request.method == 'GET':
            serializer = PCEspecificacionSerializer(pc_spec)
            return Response(serializer.data)
        
        elif request.method in ['PUT', 'PATCH']:
            partial = request.method == 'PATCH'
            serializer = PCEspecificacionSerializer(
                pc_spec, 
                data=request.data, 
                partial=partial
            )
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def favorites(self, request):
        """GET /api/profile/favorites/ - Obtiene todos los productos favoritos"""
        profile = self.get_object()
        favorites = profile.favorites.all()
        serializer = FavoritoProductoSerializer(favorites, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def add_favorite(self, request):
        """POST /api/profile/add_favorite/ - Agrega un producto a favoritos
        Body: {
            "product_type": "cpu",  // cpu, gpu, ram, disco, motherboard, etc.
            "product_id": 5
        }
        """
        profile = self.get_object()
        product_type = request.data.get('product_type')
        product_id = request.data.get('product_id')
        
        if not product_type or not product_id:
            return Response(
                {'error': 'product_type y product_id son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            # Obtener el ContentType del modelo
            content_type = ContentType.objects.get(model=product_type.lower())
            model_class = content_type.model_class()
            
            # Verificar que el producto existe
            producto = get_object_or_404(model_class, id=product_id)
            
            # Crear o obtener el favorito
            favorite, created = FavoritoProducto.objects.get_or_create(
                profile=profile,
                content_type=content_type,
                object_id=product_id
            )
            
            if created:
                serializer = FavoritoProductoSerializer(favorite)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(
                    {'message': 'Este producto ya está en favoritos'},
                    status=status.HTTP_200_OK
                )
        
        except ContentType.DoesNotExist:
            return Response(
                {'error': f'Tipo de producto "{product_type}" no válido'},
                status=status.HTTP_400_BAD_REQUEST
            )
    
    @action(detail=False, methods=['delete'])
    def remove_favorite(self, request):
        """DELETE /api/profile/remove_favorite/ - Elimina un producto de favoritos
        Body: {
            "favorite_id": 5
        }
        O:
        {
            "product_type": "cpu",
            "product_id": 5
        }
        """
        profile = self.get_object()
        favorite_id = request.data.get('favorite_id')
        
        if favorite_id:
            # Eliminar por ID del favorito
            try:
                favorite = FavoritoProducto.objects.get(id=favorite_id, profile=profile)
                favorite.delete()
                return Response(
                    {'message': 'Producto eliminado de favoritos'},
                    status=status.HTTP_200_OK
                )
            except FavoritoProducto.DoesNotExist:
                return Response(
                    {'error': 'Favorito no encontrado'},
                    status=status.HTTP_404_NOT_FOUND
                )
        else:
            # Eliminar por tipo y ID de producto
            product_type = request.data.get('product_type')
            product_id = request.data.get('product_id')
            
            if not product_type or not product_id:
                return Response(
                    {'error': 'favorite_id o (product_type y product_id) son requeridos'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            try:
                content_type = ContentType.objects.get(model=product_type.lower())
                favorite = FavoritoProducto.objects.get(
                    profile=profile,
                    content_type=content_type,
                    object_id=product_id
                )
                favorite.delete()
                return Response(
                    {'message': 'Producto eliminado de favoritos'},
                    status=status.HTTP_200_OK
                )
            except (ContentType.DoesNotExist, FavoritoProducto.DoesNotExist):
                return Response(
                    {'error': 'Favorito no encontrado'},
                    status=status.HTTP_404_NOT_FOUND
                )



class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_costo_envio(request):
    user = request.user

    try:
        usuario_extra = UsuarioExtra.objects.get(usuario=user)
        codigo_postal = usuario_extra.codigo_postal
        localidad = get_object_or_404(LocalidadArgentina, codigo_postal=str(codigo_postal))

        return Response({
            "costo_envio": localidad.costo_envio,
            "localidad": localidad.localidad  # 👈 devolvemos también el nombre
        })
    except UsuarioExtra.DoesNotExist:
        return Response({"error": "Usuario sin código postal"}, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
