from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/usuario/", include("usuario.urls")),
    path("api/computacion/", include("computacion.urls")),
    path("api/venta/", include("venta.urls")),
    path('api/carrito/', include('carrito.urls')),
    path('api/servicios_externos/', include('servicios_externos.urls')),
    path('api/envios/', include('envios.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

