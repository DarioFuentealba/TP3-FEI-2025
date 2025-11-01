from django.http import JsonResponse
from zeep import Client

def convertir_moneda(request):
    try:
        # WSDL de la calculadora SOAP pública
        wsdl = 'http://www.dneonline.com/calculator.asmx?WSDL'
        client = Client(wsdl=wsdl)

        # Parámetros de la conversión
        monto = float(request.GET.get('monto', 1000))  # monto en ARS
        tasa_cambio = float(request.GET.get('tasa', 0.005))  # USD por ARS

        # Llamada al método Multiply del SOAP para simular la conversión
        resultado = client.service.Multiply(intA=int(monto), intB=int(tasa_cambio*1000))
        # Ajustamos decimal ya que Multiply solo trabaja con enteros
        convertido = resultado / 1000

        # Retornar JSON
        return JsonResponse({
            'monto_original': monto,
            'de': 'ARS',
            'a': 'USD',
            'tasa_usada': tasa_cambio,
            'convertido': convertido
        })

    except Exception as e:
        return JsonResponse({'error': str(e)})


