from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics
from .models import CarritoItem, LocalidadArgentina
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
from django.db import transaction
from usuario.models import UsuarioExtra
from decimal import Decimal

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
        """Listar items del carrito del usuario autenticado"""
        items = CarritoItem.objects.filter(usuario=request.user)
        serializer = CarritoItemSerializer(items, many=True)
        return Response({"items": serializer.data})

    def post(self, request):
        modelo = request.data.get("modelo", "").lower()
        producto_id = request.data.get("producto_id")
        cantidad = int(request.data.get("cantidad", 1))

        if not modelo or not producto_id:
            return Response({"error": "Debe enviar modelo y producto_id"}, status=400)

        # Busca el ContentType correspondiente
        try:
            content_type = ContentType.objects.get(model=modelo)
        except ContentType.DoesNotExist:
            return Response({"error": f"Modelo '{modelo}' no encontrado."}, status=400)

        item, creado = CarritoItem.objects.get_or_create(
            usuario=request.user,
            content_type=content_type,
            object_id=producto_id,
            defaults={"cantidad": cantidad}
        )

        if not creado:
            item.cantidad += cantidad
            item.save()

        serializer = CarritoItemSerializer(CarritoItem.objects.filter(usuario=request.user), many=True)
        return Response({"items": serializer.data}, status=201)



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
    estilo_celda =ParagraphStyle(
        "Celda",
        fontSize=10,
        alignment=1,
        leading=12
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
    data = [["Nombre", "Precio", "Cantidad", "Subtotal"]]
    total = 0

    if carrito_items.exists():
        for item in carrito_items:
            producto = item.producto
            if not producto:
                continue

            nombre = getattr(producto, "nombre", "Sin nombre")
            precio = getattr(producto, "precio", 0)
            cantidad = item.cantidad
            subtotal = precio * cantidad
            total += subtotal

            data.append([
                Paragraph(nombre,estilo_celda),
                f"${precio:.2f}",
                str(cantidad),
                f"${subtotal:.2f}"
            ])
    else:
        data.append(["(Sin productos en el carrito)", "", "", ""])

    # === AGREGAR TOTAL ===
    data.append(["", "", "Total:", f"${total:.2f}"])



    # === CREAR TABLA   AJUSTES AUTOMATICOS (ANCHO)  ===
    col_widths=[max(200, len(str(item[0]))*6) for item in data] # AJUSTA EL ANCHO DE CADA CELDA EN FUNCION DEL NOMBRE
    tabla = Table(data, colWidths=[250, 100, 80, 100])
    tabla.setStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E3A8A')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('FONTNAME', (-2, -1), (-1, -1), 'Helvetica-Bold'),  # resaltar total
    ])
    contenido.append(tabla)
    contenido.append(Spacer(1, 30))

    # ====== OBTENCION DEL COSTO DE ENVIO =========
    try:
        usuario_extra=UsuarioExtra.objects.get(usuario=user)
        codigo_postal=usuario_extra.codigo_postal
        localidad=LocalidadArgentina.objects.get(codigo_postal=str(codigo_postal))
        costo_envio=localidad.costo_envio
        nombre_localidad=localidad.localidad
    except Exception:
        costo_envio=0
        nombre_localidad="(Sin Localidad Registrada)"

    total_general=total + Decimal(costo_envio)

    # ======= AGREGAR INFORMACION DE ENVIO ========
    contenido.append(Paragraph(f"Localidad: {nombre_localidad}", styles["Normal"]))
    contenido.append(Paragraph(f"Costo de Envio: ${costo_envio:.2f}", styles["Normal"]))
    contenido.append(Paragraph(f"TOTAL GENERAL: ${total_general:.2f}", estilo_titulo))
    contenido.append(Spacer(1,30))
    
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



# FINALIZAR COMPRA 
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