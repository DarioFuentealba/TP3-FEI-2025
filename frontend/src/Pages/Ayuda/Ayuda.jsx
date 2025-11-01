const Ayuda = () => {
    return(
        <div className="max-w-4xl mx-auto p-8 mt-10">
            <h1 className="text-3xl font-bold mb-6 dark:text-[#00FF84]">Centro de Ayuda</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 dark:text-[#00FF84]">Preguntas Frecuentes</h2>
                <ul className="list-disc list-inside space-y-2">
                <li><strong>¿Cómo hago un pedido?</strong> Seleccioná los productos que quieras, agregalos al carrito y completá los datos de envío y pago.</li>
                <li><strong>¿Puedo cambiar o cancelar mi pedido?</strong> Si el pedido aún no fue enviado, podés contactarnos para realizar modificaciones o cancelarlo.</li>
                <li><strong>¿Cuáles son los métodos de pago disponibles?</strong> Aceptamos tarjeta de crédito, débito, transferencia bancaria y pagos en efectivo a través de puntos habilitados.</li>
                <li><strong>¿Realizan envíos a todo el país?</strong> Sí, enviamos a todas las provincias con seguimiento incluido.</li>
                <li><strong>¿Tienen garantía en los productos?</strong> Todos los productos cuentan con garantía oficial del fabricante. Consultá los términos en la sección “Garantía”.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 dark:text-[#00FF84]">Guías Rápidas</h2>
                <p className="mb-2">- Cómo armar tu PC paso a paso.</p>
                <p className="mb-2">- Cómo verificar compatibilidad de componentes.</p>
                <p className="mb-2">- Cómo usar tu cuenta y seguir tus pedidos.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-[#00FF84]">Contacto para Soporte</h2>
                <p>
                Si no encontraste la respuesta que buscabas, podés contactarnos a través de:
                </p>
                <ul className="list-disc list-inside">
                <li>Correo electrónico: <a href="mailto:soporte@powertech.com" className="text-[#0000EE] dark:text-[#00FF84] underline">soporte@powertech.com</a></li>
                <li>Teléfono: 299-412-3456</li>
                <li>Chat en línea disponible en el sitio web (de lunes a viernes de 9 a 18 hs)</li>
                </ul>
            </section>
        </div>
    );
};

export default Ayuda;
