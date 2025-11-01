

# <p align="center">Universidad Nacional del Comahue</p>  
# <p align="center">Facultad de Informatica</p>  
  
# <p align="center">TP Final de Carrera</p>    
  
  
<p align="center">
  <img src="../ComputacionTienda/frontend/src/assets/ImagenesREADME/Logos/logo-UNCo.png" width="150" />
  <img src="../ComputacionTienda/frontend/src/assets/ImagenesREADME/Logos/logo-FAI.png" width="150" />
</p>  
  
  
## Integrantes:   
* Fuentealba Dario FAI-4424    
* Urra Juan Pablo FAI-3730    
  
  
  
# <p align="center">Trabajo Práctico Final</p>    
  
## <p align="center"> PowerTech </p>    
  
Esta aplicación es una PWA desarrollada con React que permite visualizar y explorar distintos componentes de computadora, organizados por categorías.  
  
  
## <p align="center"> Tecnologías utilizadas </p>  
  
<img src="../ComputacionTienda/frontend/src/assets/ImagenesREADME/Logos/5_logos.png" width="150" />
  
  
## <p align="center"> Funcionalidades principales </p>  
  
Página de inicio (Home):  
Muestra las categorias disponibles (por ejemplo: Procesadores, Placas de video, Memorias, etc.). Al hacer click en una, redirige a la vista de esa categoria.  
  
Vista de categoría:  
Se presentan tarjetas con componentes pertenecientes a esa categoria, en forma de lista horizontal o vertical. Cada tarjeta contiene: imagen del componente,
estrella de favorito (azul si está guardado en localStorage), nombre del componente y el boton de ver detalle que redirecciona a la pagina de informacion.   
  
Página de información de componente:  
Al hacer clic en una tarjeta, se accede a una vista detallada que muestra: título, marca, mModelo, especificaciones tecnicas (extraidas de una segunda API), 
descripción (en español o inglés, segun idioma detectado).   
  
Favoritos:  
Se accede desde la barra de navegación. Muestra las tarjetas guardadas como favoritas (usando localStorage), con las mismas funcionalidades de visualizacion.  
  
Barra de navegación:  
Incluye accesos rapidos a: inicio, categorías (con dropdown) y favoritos  
  
Buscador:  
En las vistas de categoria y favoritos se puede buscar por nombre o categoria.  
  
  
## <p align="center">API</p>  
Hicimos uso de MockApi para realizar nuestra propia api de componentes.   
MockAPI principal:  
Contiene información de los componentes:  
id, nombre, image, category, descripcion (con versiones en es y en) y precio.  
  
API secundaria:  
Provee detalles técnicos:  
id, idComponente, marca, modelo, fecha de lanzamiento y especificaciones.  
  
# <p align="center">Idioma</p>  
La app está completamente traducida al español e inglés, gracias a la integración con i18n.
El contenido se adapta dinámicamente al idioma seleccionado o detectado.  
  
# <p align="center">Responsive</p>  
La interfaz se adapta tanto a pantallas de escritorio como a dispositivos móviles, garantizando una buena experiencia en cualquier dispositivo.  
  
  
# <p align="center">Instalar Git</p>
  
1. Ir a https://git-scm.com/downloads/win y descargar el instalador  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Git/01.png)  
  
2. Ejecutar el instalador descargado y seguir los pasos  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Git/02.png)  
  
3. Verificar la instalación  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Git/03.png)  
  
  
# <p align="center">Instalar Node.js</p>  
  
1. Ir a https://nodejs.org/en/download y descargar el instalador  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Node_JS/01.png)  
  
2. Ejecutar el instalador descargado y seguir los pasos  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Node_JS/02.png)  
  
3. Si sale este error:  
Ese error no significa que npm esté mal instalado, sino que PowerShell bloquea los scripts por su política de seguridad.  
Esto pasa porque npm en Windows es un script .ps1 de PowerShell, y PowerShell por defecto bloquea la ejecución de scripts.  
Voy a cambiar política de ejecución:  
a) Abrir PowerShell como Administrador y ejecutar: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser  
b) Después aceptar con Y.  
c) Esto permite ejecutar scripts locales (como npm.ps1) sin problemas.  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Node_JS/03.png)  
  
  
# <p align="center">Instalar Python</p>  
  
1. Ir a la web https://www.python.org/downloads/ y descargar Python  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Python/01.png)  
  
2. Abrir el archivo descargado y seguir las instrucciones  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Python/02.png)  
  
3. Verificar que se instaló con python --version  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Python/03.png)  
  
  
# <p align="center">Instalar Django</p>  
  
1. Verificar si tengo pip (el gestor de paquetes de Python): py -m pip --version  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Django/01.png)  
  
2. Instalar Django: py -m pip install django  
Ya instalaste Django 5.2.6 correctamente  
Las advertencias (not on PATH) no son errores graves:  
Dice que los ejecutables django-admin.exe y sqlformat.exe quedaron en  
C:\Users\Dario\AppData\Roaming\Python\Python313\Scripts  
Como esa carpeta no está en el PATH, no puedo ejecutar django-admin directo.  
Solución rápida: siempre usar py -m django  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Django/02.png)  
  
3. Verificar que se instaló con py -m django --version  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Django/03.png)  
  
  
# <p align="center">Instalar backend y frontend</p>  
  
1. Dentro de mi proyecto creo una carpeta backend y otra frontend  
Esto es si instalo react con vite, pero yo lo voy a instalar con create-react-app entonces no debo crear la carpeta frontend  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/01.png)  
  
  
## <p align="center">Instalar el backend</p>  
  
1. Creo un entorno virtual con python -m venv venv  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/back/01.png)  
  
2. Activo el entorno virtual con .\venv\Scripts\Activate.ps1  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/back/02.png)  
  
3. Instalar Django y Django REST Framework (para API): pip install django djangorestframework  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/back/03.png)  
  
4. Crear el proyecto Django: django-admin startproject backend .  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/back/04.png)  
  
5. Crear una app dentro del proyecto (por ejemplo api): python manage.py startapp api  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/back/05.png)  
  
6. Probar que Django funciona: python manage.py runserver  
Luego abrís en el navegador http://127.0.0.1:8000/ y debería aparecer la página de Django.  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/backend/06.png)  
  
  
## <p align="center">Instalar el frontend</p>  
  
1. En la carpeta Backend_y_frontend coloco: npx create-react-app frontend  
Esto va a crear una carpeta llamada frontend con todo listo para React.  
npx se asegura de usar la versión más reciente de create-react-app.  
Si me pide confirmación para instalar paquetes, coloco "y"  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/front/01.png)  
  
2. Entro a la carpeta del proyeco con cd frontend  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/front/02.png)  
  
3. Levantar el servidor de desarrollo con: npm start  
Esto abre automáticamente tu navegador en http://localhost:3000/.  
Desde ahí vas a ver la página de inicio de React.    
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Backend_y_frontend/front/03.png)  
  
  
  
# <p align="center">Instalar librearía material-react-table</p>  
  
1. En la consola colocar el comando que me dará toda la lógica de filtros, orden, paginación, etc: npm install material-react-table @mui/material @mui/icons-material @emotion/react @emotion/styled  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/material_react_table/01.png)  
  
  
# <p align="center">Instalar librearía TanStack Table (React Table)</p>  
  
1. En la consola colocar el comando npm install @tanstack/react-table  
Web: https://tanstack.com/table/latest?utm_source  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/TanStack_Table_(React_Table)/01.png)  
  
2. En la consola colocar el comando npm install @mui/material @mui/icons-material @emotion/react @emotion/styled  
a) @mui/material: componentes como Grid, Card, Button, etc.  
b) @mui/icons-material: iconos listos para usar  
c) @emotion/react y @emotion/styled: dependencias de estilos de MUI  
Web: https://mui.com/?utm_source  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/TanStack_Table_(React_Table)/02.png)  
  
  
# <p align="center">Instalar librearía react-step-wizard</p>  
  
1. En la consola colocar el comando npm install react-step-wizard  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/react_step_wizard/01.png)  
  
  
# <p align="center">Instalar mysqlclient</p>  
  
1. En la consola colocar el comando pip install mysqlclient  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Mysqlclient/01.png)  
  
  
# <p align="center">Instalar pymysql</p>  
  
1. En la consola colocar el comando pip install pymysql  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Pymysql/01.png)  
  
  
# <p align="center">Instalar librearía react-strap bootstrap</p>  
  
1. En la consola colocar el comando npm install reactstrap bootstrap  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/reactstrap_bootstrap/01.png)  
  
  
  # <p align="center">Conectar React frontend para que pueda comunicarse con Django backend</p>  
  
  ## <p align="center">Backend Django: habilitar CORS</p>
  
1. Cuando React y Django corren en diferentes puertos (por ejemplo React en 3000 y Django en 8000), el navegador bloquea las peticiones por seguridad. Para permitirlas, se usa CORS.  
a) Instalo el paquete: pip install django-cors-headers  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/CORS_ConectarReactDjango/01_a.png)  
  
b) Agregarlo en settings.py de Django. Esto permite que React haga peticiones al backend.  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/CORS_ConectarReactDjango/01_b.png)  
  
2. Crear un endpoint simple en Django. 
a) En tu app api, en views.py:  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/CORS_ConectarReactDjango/02_a.png)  
  
b) Agregarlo en settings.py de Django. Esto permite que React haga peticiones al backend.  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/CORS_ConectarReactDjango/02_b.png)  
  
3. Frontend React: consumir la API  
En tu React (frontend/src/App.js):   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/CORS_ConectarReactDjango/03.png)  
  
4. Ahora sigo estos pasos:  
Levantar Django (python manage.py runserver)  
Levantar React (npm start)  
Debo ver el mensaje "Hola desde Django!" en la página de React  
  
5. Resumen:  
Django corre en 8000, React corre en 3000.  
django-cors-headers permite que React haga requests sin problemas de seguridad.  
Uso fetch en React para consumir endpoints de Django.  
  
  
# <p align="center">Instalar librearía Tailwind 3</p>  
  
1. Instalo Tailwind 3 porque create-react-app no es compatible con la versión 4.  
  
2. En la consola colocar los comandos: npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3 autoprefixer postcss  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Tailwind/02.png)  
  
3. postcss.config.js debe quedar así:  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Tailwind/03.png)  
  
  
# <p align="center">Instalar react router DOM</p>  
  
1. En la terminal ejecuto npm i react-router-dom  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/reactRouterDOM/01.png)  
  
2. Debo hacer ésto en el index.js.
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/reactRouterDOM/02.png)  
  
3. Defino las rutas en App.js   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/reactRouterDOM/03.png)  
  
4. Lo dejo así:  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/reactRouterDOM/04.png)  
  
  
# <p align="center">Instalar JWT (JSON Web Tokens) - Manejo de roles en backend</p>  
  
1. Primero entro al entorno virtual de mi backend (Django) para que la dependencias queden registradas en el entorno virtual y no se mezclen con las del frontend. Uso el comando .\venv\Scripts\Activate.ps1  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/01.png)  
  
2. En la terminal ejecuto:  
a) python -m pip install --upgrade pip  
b) python -m pip install djangorestframework djangorestframework-simplejwt  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/02.png)  
  
3. Agrego la app rest_framework_simplejwt al INSTALLED_APPS que esta en el script settings.py   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/03.png)  
  
4. DRF (Django Rest Framework) para que use JWT como sistema de autenticación  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/04.png)  
  
5. Creo el superusuario   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/05.png)  
  
6. Ejecuto python manage.py runserver  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/06.png)  
  
7. Pruebo desde mi frontend React: POST http://127.0.0.1:8000/api/token/   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/07.png)  
  
  
# <p align="center">Instalar react-icons</p>  
  
1. En la terminal ejecuto npm install react-icons  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/JWT/01.png)  
  
  
# <p align="center">Instalar lottie-player</p>  
  
1. En la consola ingreso el comando npm install @lottiefiles/react-lottie-player   
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Lottie/01.png)  
  
2. Ejecuto python manage.py runserver  
  
  
  # <p align="center">Instalar react-hook-form</p>  
  
1. En la terminal ejecuto npm install react-hook-form  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/react-hook-form/01.png)  
  
  
# <p align="center">Instalar axios</p>  
  
1. En la terminal ejecuto npm install axios@1.3.6  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Axios/01.png)  
  
  
# <p align="center">Instalar react-toastify</p>  
  
1. En la terminal ejecuto npm install react-toastify  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Toastify/01.png)  
  
  
# <p align="center">Instalar reportlab</p>  
  
1. En la terminal ejecuto pip install reportlab  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/Reportlab/01.png)  
  
  
# <p align="center">Instalar lucide-react</p>  
  
1. En la terminal ejecuto pip install lucide-react  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/LucideReact/01.png)  
  
  
# <p align="center">Instalar emailJS-com</p>  
  
1. En la terminal ejecuto npm install emailjs-com (frontend)  
![Ejemplo](./src/assets/Imagenes/ImagenesREADME/emailJS/01.png)  
  
  





Se instalo: 
Django
React
axios
react-router-dom
@emotion/react
@emotion/style
@mui/icons-material
@toolpad/core


definir tablas de BD

REACT
Ver uso de librerías
Conexión con el back
hooks
¿Cuál sería la mejor estructura de directorios?
Navegación entre páginas
json para renderizar

