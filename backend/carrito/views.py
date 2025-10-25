from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics
from .models import CarritoItem
from .serializers import CarritoItemSerializer
from computacion.models import Notebook, Gpu, Fuente, Cooler, Motherboard, Disco, Ram, PcEscritorio
from django.http import HttpResponse
from io import BytesIO
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from rest_framework.decorators import api_view, permission_classes
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from django.contrib.contenttypes.models import ContentType
import os
from django.db import transaction #Para finalizar compra

# ======== MODELOS DISPONIBLES ========
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

# ======== ACTUALIZAR ITEM ========
class CarritoItemUpdateView(generics.UpdateAPIView):
    queryset = CarritoItem.objects.all()
    serializer_class = CarritoItemSerializer


# ======== ELIMINAR ITEM ========
class CarritoItemDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id):
        try:
            item = CarritoItem.objects.get(id=id, usuario=request.user)
            item.delete()
            return Response({"message": "Producto eliminado"})
        except CarritoItem.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)


# ======== CARRITO ========
class CarritoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        items = CarritoItem.objects.filter(usuario=request.user)
        serializer = CarritoItemSerializer(items, many=True)
        return Response({"items": serializer.data})

    def post(self, request):
        nombre_modelo = request.data.get("modelo", "").lower().replace(" ", "")
        producto_id = request.data.get("producto_id")
        cantidad = int(request.data.get("cantidad", 1))
        print(">>> Datos recibidos:", request.data)

        if not nombre_modelo or not producto_id:
            return Response({"Error":"Debe enviar el modelo y el id del producto"},status=status.HTTP_400_BAD_REQUEST)

        try:
            content_type = ContentType.objects.get(model=nombre_modelo)
        except ContentType.DoesNotExist:
            return Response(
                {"error": f"Modelo '{nombre_modelo}' no encontrado"},
                status=status.HTTP_400_BAD_REQUEST
            )

        
        item, creado = CarritoItem.objects.get_or_create(
    usuario=request.user,
    content_type=content_type,
    object_id=producto_id,
    defaults={
        "producto_id": producto_id,
        "modelo": nombre_modelo,
        "cantidad": cantidad
    }
)

        if not creado:
            item.cantidad+=cantidad
            item.save()

        else:
            item.cantidad=cantidad
            item.save()
        

        items = CarritoItem.objects.filter(usuario=request.user)
        serializer = CarritoItemSerializer(items, many=True)
        print(">>> Datos devueltos por el backend:", serializer.data)
        return Response({"items": serializer.data}, status=status.HTTP_201_CREATED)


# ======== GENERAR PDF CON QR ========
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def generar_pdf(request):
    """
    GENERA UN PDF CON DATOS DEL CARRITO DEL USUARIO AUTENTICADO.
    Incluye:
    - Logo del proyecto
    - Tabla con los productos del carrito
    - Código QR con enlace de pago
    """
    user = request.user
    user_id = user.id
    username = user.username

    buffer = BytesIO()

    # CONFIGURACIÓN DEL DOCUMENTO PDF
    doc = SimpleDocTemplate(
        buffer,
        pagesize=landscape(A4),
        rightMargin=40,
        leftMargin=40,
        topMargin=60,
        bottomMargin=40
    )

    # === ESTILOS ===
    styles = getSampleStyleSheet()
    estilo_titulo = ParagraphStyle(
        "Titulo",
        fontSize=20,
        alignment=1,  # centrado
        textColor=colors.HexColor("#1E3A8A"),
        spaceAfter=20
    )

    contenido = []
    contenido.append(Paragraph("Productos en tu carrito", estilo_titulo))
    contenido.append(Spacer(1, 20))

    # === LOGO ===
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ruta_imagen = os.path.join(BASE_DIR, "media", "Logo_verde_fondo_oscuro_Footer.png")

    if os.path.exists(ruta_imagen):
        imagen = Image(ruta_imagen, width=100, height=100)
        imagen.hAlign = "CENTER"
        contenido.append(imagen)
        contenido.append(Spacer(1, 20))

    contenido.append(Paragraph(f"Reporte de carrito del usuario: {username}", styles["Normal"]))
    contenido.append(Spacer(1, 20))

    # === OBTENER DATOS DEL CARRITO ===
    carrito_items = CarritoItem.objects.filter(usuario=user)
    data = [["Producto", "Precio", "Cantidad", "Modelo"]]

    if carrito_items.exists():
        for item in carrito_items:
            producto = item.producto  # objeto genérico (CPU, Notebook, etc.)
            if producto is None:
                continue

            # Intentar obtener categoría o subcategoría si existen
            categoria = ""
            try:
                if hasattr(producto, "subcategoria") and hasattr(producto.subcategoria, "categoria"):
                    categoria = producto.subcategoria.categoria.nombre
                elif hasattr(producto, "categoria"):
                    categoria = producto.categoria.nombre
            except Exception:
                categoria = "No especificada"

            # Obtener imagen si existe
            foto = getattr(producto, "foto", None)
            foto_texto = foto.url if foto else "Sin imagen"

            data.append([
                getattr(item, "producto_nombre", "N/A"),
                f"${getattr(item, 'producto_precio', 0):.2f}",
                str(item.cantidad),
                item.modelo
            ])
    else:
        data.append(["(Sin productos en el carrito)", "", "", "", ""])

    # === CREAR TABLA ===
    tabla = Table(data, colWidths=[180, 100, 80, 120, 150])
    tabla.setStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E3A8A')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray)
    ])
    contenido.append(tabla)
    contenido.append(Spacer(1, 30))

    # === CÓDIGO QR ===
    qr_data = f"https://tu-sitio.com/pagar/{user_id}"
    qr_code = qr.QrCodeWidget(qr_data)
    bounds = qr_code.getBounds()
    width = bounds[2] - bounds[0]
    height = bounds[3] - bounds[1]
    d = Drawing(100, 100, transform=[100. / width, 0, 0, 100. / height, 0, 0])
    d.add(qr_code)

    contenido.append(Paragraph("Escaneá este QR para pagar:", styles["Normal"]))
    contenido.append(Spacer(1, 10))
    contenido.append(d)

    # === CREAR PDF ===
    doc.build(contenido)
    buffer.seek(0)
    response = HttpResponse(buffer, content_type='application/pdf')
    response['Content-Disposition'] = f'inline; filename="carrito_{username}.pdf"'
    return response


# Finalizar compra
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def finalizar_compra(request):
    user = request.user
    carrito_items = CarritoItem.objects.filter(usuario=user)

    if not carrito_items.exists():
        return Response({"error": "No hay productos en el carrito"}, status=400)

    with transaction.atomic():
        for item in carrito_items:
            producto = item.producto  # objeto genérico (CPU, Notebook, etc.)
            if producto is None:
                continue

            # Reducir stock si existe
            if hasattr(producto, "stock"):
                if producto.stock >= item.cantidad:
                    producto.stock -= item.cantidad
                    producto.save()
                else:
                    return Response({
                        "error": f"No hay suficiente stock de {getattr(producto, 'nombre', 'Producto')}"
                    }, status=400)

        # Una vez actualizados los stocks, vaciamos el carrito
        carrito_items.delete()

    return Response({"message": "Compra finalizada correctamente"})