import React from "react";
import PreguntasYRespuestas from "../../Components/Tarjeta/TarjetaPregunta/PreguntasYRespuestas";

const PreguntasFrecuentes = () => {
    const secciones = [
        {
            titulo: "Retiros",
            preguntas: [
                { pregunta: "¿Cómo funciona el retiro en el local?", respuesta: "Power Tech ofrece la opción de retiro sin costo en Calle Falsa 123, Floresta (CABA) Lunes a Viernes de 9 a 17hs - Sábados 10 a 14hs." },
                { pregunta: "¿Cuándo puedo retirar mi pedido?", respuesta: "Cuando recibas el correo de confirmación de retiro." },
                { pregunta: "Quién puede retirar mi pedido?", respuesta: "El titular de la compra o una persona autorizada. En este caso,informar previamente el nombre completo, DNI y número de contacto de la persona autorizada." },
                { pregunta: "¿Puedo cambiar mi punto de retiro?", respuesta: "No, sólo tenemos 1 local donde pueden retirarse los productos." },
                { pregunta: "¿Tenés un faltante en tu compra?", respuesta: "Si recibiste tu pedido y falta algún producto, contactate de forma inmediata con nuestro canal oficial de atención al cliente en la sección Contacto al final de la página." },
            ],
        },
        {
            titulo: "Envíos",
            preguntas: [
                { pregunta: "¿Hacen envíos a todo el país?", respuesta: "Sí, realizamos envíos nacionales con seguimiento." },
                { pregunta: "¿Cuánto tarda el envío?", respuesta: "Depende de la ubicación, entre 3 y 7 días hábiles." },
                { pregunta: "¿Puedo rastrear mi pedido?", respuesta: "Sí, recibirás un número de seguimiento al despacho." },
            ],
        },
        {
            titulo: "Compras",
            preguntas: [
                { pregunta: "¿Puedo pagar con tarjeta?", respuesta: "Aceptamos Visa, Mastercard y Mercado Pago." },
                { pregunta: "¿Puedo cancelar mi pedido?", respuesta: "Sí, dentro de las 24 horas posteriores a la compra." },
                { pregunta: "¿Hacen facturas A y B?", respuesta: "Sí, solicitando al finalizar la compra." },
            ],
        },
    ];

    return(
        <div className="max-w-6xl mx-auto p-8 mt-10 space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#000000] dark:text-[#00FF84]">Preguntas Frecuentes</h1>
        {secciones.map((s, i) => (
            <PreguntasYRespuestas key={i} titulo={s.titulo} preguntas={s.preguntas} />
        ))}
        </div>
    );
};

export default PreguntasFrecuentes;
