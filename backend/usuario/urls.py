from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, RolViewSet, MenuViewSet
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
)

# URLs generadas automaticamente usando Routers y ViewSets

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet,basename="usuario")
router.register(r'roles', RolViewSet,basename="rol")
router.register(r'menus', MenuViewSet,basename="menu")

# Seccion para el manejo de URLs manuales. Para casos de uso especial como autenticacion
# y permisos. 


# Urls necesarias para el enrutamiento de las vistas
urlpatterns=[
    path('', include(router.urls)),
    path('login/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
]

