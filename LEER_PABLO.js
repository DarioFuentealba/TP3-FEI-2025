/*
?ARMAR TU PC

?Modifique los siguientes script:

TODO: backend

*Archivo	        Ruta	                      Comentarios
requirements.txt	backend/requirements.txt	  Lista las librerías: Django>=4.2, djangorestframework, mysqlclient, django-cors-headers, python-dotenv
.env	            backend/.env	              Credenciales de tu DB (opcional)
settings.py	        backend/backend/settings.py	  Configuración Django, CORS, base de datos
urls.py	            backend/backend/urls.py	      Monta api.urls y admin
models.py	        backend/api/models.py	      Modelos Marca, Procesador, Motherboard, Cooler, etc.
serializers.py	    backend/api/serializers.py	  Serializadores de los modelos
views.py	        backend/api/views.py	      Vistas con generics.ListAPIView
urls.py	            backend/api/urls.py	          Endpoints /marcas/, /procesadores/, /motherboards/, /coolers/
admin.py	        backend/api/admin.py	      Registrar modelos si querés verlos en admin
migrations/	        backend/api/migrations/	      Django genera esto al correr makemigrations


TODO: frontend

*Archivo	           Ruta	                                 Comentarios
App.jsx	               frontend/src/App.jsx	                 Componente principal que llama a ArmadorPC
lib/api.js	           frontend/src/lib/api.js	             Funciones para fetch a Django (getMarcas, getProcesadoresByMarca, etc.)
pages/ArmadorPC.jsx	   frontend/src/pages/ArmadorPC.jsx	     Componente principal de armado de PC, maneja selects y flujo



?18 de septiembre

Se hacen y mejoran icono y botones de carrito, iniciar sesión, ir arriba.

Se instala react-router-DOM y se hacen las rutas del footer (no todas, falta hacer aún), se crean los archivos src/const/routes.js y se modifica App.js

Se crean paginas de Home y de Login

Se modifica el footer, index.js y readme.md

*/