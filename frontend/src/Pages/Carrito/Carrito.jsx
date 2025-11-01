import React, { useEffect, useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import BotonReporte from "../../Components/Botones/BotonReporte/BotonReporte";
import BotonFinalizarCompra from "../../Components/Botones/BotonFinalizarCompra/BotonFinalizarCompra";
import Precio from "../../Components/MonedaToggle/Precio";
import axios from "axios";

const CarritoPage = () => {
  const { carrito, loading, actualizarItem, eliminarItem, fetchCarrito } = useCarrito();
  const [mensajeCompra, setMensajeCompra] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");
  const [costoEnvioUsuario, setCostoEnvioUsuario] = useState(0);
  const [nombreLocalidad, setNombreLocalidad] = useState("");


  const obtenerCostoEnvioUsuario = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:8000/api/usuario/costo-envio/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCostoEnvioUsuario(res.data.costo_envio || 0);
    setNombreLocalidad(res.data.localidad || "tu localidad");
  } catch (err) {
    console.error("Error al obtener costo de envío:", err);
  }
  };

  useEffect(() => {
    //Refresca el carrito al montar el componente
    //console.log("item actual:", carrito);
    obtenerCostoEnvioUsuario();
    fetchCarrito();
    obtenerCostoEnvioUsuario();
  }, []);

  const subtotal = carrito.reduce((acc, item) => acc + (item.total || item.precio) * item.cantidad, 0);
  const totalConEnvio = subtotal + costoEnvioUsuario;

  if (loading) return <p className="text-center mt-10">Cargando carrito...</p>;
  if (!carrito || carrito.length === 0) return <p className="text-center mt-10">Tu carrito está vacío 😢</p>;

  //Normaliza los nombres de los campos según lo que devuelve tu backend
  const total = carrito.reduce(
    (acc, item) => acc + Number(item.precio || item.producto_precio || 0) * item.cantidad,
    0
  );
  console.log("NOMBRE DEL PRODUCTO AGREGADO AL CARRITO: ",carrito);
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#000000] dark:text-[#00FF84]">
        Tu Carrito
      </h1>

      <div className="flex flex-col gap-4">
        {carrito.map((item) => {
          const nombre = item.nombre || item.producto_nombre || "Sin nombre";
          const precio = Number(item.precio || item.producto_precio || 0);
          const foto = item.foto ? `http://localhost:8000${item.foto}` : "/img/placeholder.png";

          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-md
              bg-[#1F2937] border-[#1F2937] hover:shadow-[0_0_15px_#1F2937]
              dark:bg-[#000000] dark:border-[#00FF84] dark:hover:shadow-[0_0_15px_#00FF84]"
            >
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <img
                  src={foto}
                  alt={nombre}
                  className="w-24 h-24 object-cover rounded-md border text-white border-[#000000] dark:text-[#00FF84] dark:border-[#00FF84]"
                />
                <div>
                  <h2 className="text-xl font-bold text-white dark:text-[#00FF84]">{nombre}</h2>
                  <p className="text-white dark:text-[#00FF84]">
                    Precio: <Precio precioARS={precio} />
                  </p>
                </div>
              </div>

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

              <div className="mt-4 md:mt-0 md:ml-4">
                <p className="text-white dark:text-[#00FF84]">
                  Subtotal: <Precio precioARS={(item.total || item.precio) * item.cantidad} />
                </p>
              </div>
            </div>
          );
        })}
        {/**COSTO DE ENVIO Y TOTAL  */}
        <div className="flex justify-end mt-4 text-xl font-semibold text-black dark:text-[#00FF84]">
          Costo de envío ({nombreLocalidad}): <Precio precioARS={costoEnvioUsuario} />
        </div>
        
        {/* Total general */}
        <div className="flex justify-end mt-6 text-2xl font-bold text-black dark:text-[#00FF84]">
          Total: <Precio precioARS={totalConEnvio} />
        </div>
      </div>
      <BotonReporte/>
      <BotonFinalizarCompra
        onCompraFinalizada={(msg, tipo = "success") => {
          setMensajeCompra(msg);
          setTipoMensaje(tipo);
          fetchCarrito();
        }}
      />

    </div>
  );
};

export default CarritoPage;

