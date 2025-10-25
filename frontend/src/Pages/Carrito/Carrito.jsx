import React, { useEffect } from "react";
import { useCarrito } from "../../context/CarritoContext";
import BotonReporte from '../../Components/Botones/BotonReporte/BotonReporte';
import BotonFinalizarCompra from '../../Components/Botones/BotonFinalizarCompra/BotonFinalizarCompra';
import Precio from "../../Components/MonedaToggle/Precio";

const CarritoPage = () => {
  const { carrito, loading, actualizarItem, eliminarItem, fetchCarrito } = useCarrito();
  const [mensajeCompra, setMensajeCompra] = React.useState(null);
  const [tipoMensaje, setTipoMensaje] = React.useState("success"); // "success" o "error"

  useEffect(() => {
    //Refresca el carrito al montar el componente
    console.log("item actual:", actualizarItem);

    fetchCarrito();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando carrito...</p>;

  if (!carrito || carrito.length === 0) {
    return <p className="text-center mt-10">Tu carrito está vacío 😢</p>;
  }

  //Normaliza los nombres de los campos según lo que devuelve tu backend
  const total = carrito.reduce(
    (acc, item) => acc + Number(item.precio || item.producto_precio || 0) * item.cantidad,
    0
  );

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#000000] dark:text-[#00FF84]">
        Tu Carrito
      </h1>

      <div className="flex flex-col gap-4">
        {carrito.map((item) => {
          const nombre = item.nombre || item.producto_nombre || "Sin nombre";
          const precio = Number(item.precio || item.producto_precio || 0);
          const foto = item.foto
            ? `http://localhost:8000${item.foto}`
            : "/img/placeholder.png"; //por si falta imagen

          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-md
              bg-[#1F2937] border-[#1F2937] hover:shadow-[0_0_15px_#1F2937]
              dark:bg-[#000000] dark:border-[#00FF84] dark:hover:shadow-[0_0_15px_#00FF84]"
            >
              {/* Imagen y nombre */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <img
                  src={foto}
                  alt={nombre}
                  className="w-24 h-24 object-cover rounded-md border
                  text-white border-[#000000]
                  dark:text-[#00FF84] dark:border-[#00FF84]"
                />
                <div>
                  <h2 className="text-xl font-bold text-white dark:text-[#00FF84]">{nombre}</h2>
                  <p className="text-white dark:text-[#00FF84]">Precio: <Precio precioARS={precio}/> </p>
                </div>
              </div>

              {/* Controles de cantidad */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button
                  onClick={() => actualizarItem(item.id, Math.max(item.cantidad - 1, 1))}
                  className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition text-white"
                >
                  -
                </button>

                <span className="text-white dark:text-[#00FF84]">{item.cantidad}</span>

                <button
                  onClick={() => actualizarItem(item.id, item.cantidad + 1)}
                  className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition text-white"
                >
                  +
                </button>

                <button
                  onClick={() => eliminarItem(item.id, nombre)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition text-white"
                >
                  Eliminar
                </button>
              </div>

              {/* Subtotal */}
              <div className="mt-4 md:mt-0 md:ml-4">
                <p className="text-white dark:text-[#00FF84]">
                  Subtotal: <Precio precioARS={precio * item.cantidad} />
                </p>
              </div>
            </div>
          );
        })}

        {/* Total general */}
        <div className="flex justify-end mt-6 text-2xl font-bold text-black dark:text-[#00FF84]">
          Total: <Precio precioARS={total} />
        </div>
      </div>
      <BotonReporte/>
      <BotonFinalizarCompra 
        onCompraFinalizada={(msg, tipo="success") => {
          setMensajeCompra(msg);
          setTipoMensaje(tipo);
          fetchCarrito(); // refresca carrito
        }} 
      />
    </div>
  );
};

export default CarritoPage;



{/*import React from "react";
import { useCarrito } from "../../context/CarritoContext";
import Precio from "../../Components/MonedaToggle/Precio";
import { toast } from "react-toastify";

const Carrito = () => {
    const { carrito, eliminarItem, actualizarItem } = useCarrito();

    // Cuando elimino un item
    const handleEliminar = async (itemId, nombre) => {
        await eliminarItem(itemId);
        toast.info(`${nombre} eliminado del carrito`);
    };

    // Cuando aumento o disminuyo la cantidad
    const handleActualizarCantidad = async (itemId, nuevaCantidad, nombre) => {
        if (nuevaCantidad < 1) return; // evita cantidades menores a 1
        await actualizarItem(itemId, nuevaCantidad);
        toast.success(`Cantidad de ${nombre} actualizada`);
    };

    if (!carrito || carrito.length === 0) {
        return (
            <p className="text-center mt-10 text-white dark:text-[#00FF84]">
                Tu carrito está vacío 😢
            </p>
        );
    }

    const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    return (
        <div className="max-w-[1200px] mx-auto p-4 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center dark:text-[#00FF84]">
                Tu Carrito
            </h1>

            <div className="flex flex-col gap-4">
                {carrito.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg bg-[#1F2937] dark:bg-[#000000]"
                    >
                        */}{/* Imagen y nombre */} {/*
                        <div className="flex items-center gap-4 w-full md:w-1/2">
                            <img
                                src={item.imagen || item.imagena} // usa la imagen que tengas en Producto
                                alt={item.nombre}
                                className="w-24 h-24 object-contain"
                            />
                            <div>
                                <h2 className="text-xl font-bold dark:text-[#00FF84]">
                                    {item.nombre}
                                </h2>
                                <p className="dark:text-[#ffffff]">
                                    Precio: <Precio precioARS={item.precio} />
                                </p>
                            </div>
                        </div>

                        */}{/* Cantidad y acciones */}{/*
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                            <button
                                onClick={() =>
                                    handleActualizarCantidad(
                                        item.id,
                                        item.cantidad - 1,
                                        item.nombre
                                    )
                                }
                                disabled={item.cantidad <= 1}
                                className="px-3 py-1 bg-[#00FF84] text-black font-bold rounded hover:scale-105 transition"
                            >
                                -
                            </button>
                            <span className="text-xl font-bold dark:text-[#ffffff]">{item.cantidad}</span>
                            <button
                                onClick={() =>
                                    handleActualizarCantidad(
                                        item.id,
                                        item.cantidad + 1,
                                        item.nombre
                                    )
                                }
                                className="px-3 py-1 bg-[#00FF84] text-black font-bold rounded hover:scale-105 transition"
                            >
                                +
                            </button>

                            <button
                                onClick={() => handleEliminar(item.id, item.nombre)}
                                className="px-3 py-1 bg-[#FF0033] text-white font-bold rounded hover:scale-105 transition"
                            >
                                Eliminar
                            </button>
                        </div>

                        */}{/* Subtotal */}{/*
                        <div className="mt-2 md:mt-0 md:ml-4">
                            <p className="font-bold dark:text-[#00FF84]">
                                Subtotal:{" "}
                                <Precio precioARS={item.precio * item.cantidad} />
                            </p>
                        </div>
                    </div>
                ))}

                */}{/* Total */}{/*
                <div className="flex justify-end mt-6">
                    <p className="text-2xl font-bold dark:text-[#00FF84]">
                        Total: <Precio precioARS={total} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carrito;*/}
