import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCarrito } from "../../context/CarritoContext";

const Productos = () => {
  const { subcategoriaLabel } = useParams();
  const { agregarAlCarrito } = useCarrito();

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Mapeo de subcategorías a endpoints de Django
  const endpointMap = {
    "Notebook": "notebooks",
    "PC Escritorio": "pc_escritorios",
    "Cpu": "cpus",
    "Motherboard": "motherboards",
    "Gabinete": "gabinetes",
    "Ram": "rams",
    "Disco": "discos",
    "Fuente": "fuentes",
    "Monitor": "monitores",
    "Mouse": "mouses",
    "Teclado": "teclados",
    "Gpu": "gpus",
    "Cooler": "coolers",
  };

  useEffect(() => {
    const fetchProductos = async () => {
      setCargando(true);
      setError("");

      const endpoint = endpointMap[subcategoriaLabel];
      if(!endpoint){
        setError("Subcategoría desconocida");
        setCargando(false);
        return;
      }

      try{
        const token = localStorage.getItem("token"); // si usas JWT
        const res = await axios.get(`http://localhost:8000/api/computacion/${endpoint}/`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setProductos(res.data);
      }catch (err){
        console.error(err);
        setError("Error al cargar productos");
      }finally{
        setCargando(false);
      }
    };

    fetchProductos();
  }, [subcategoriaLabel]);

  if (cargando) return <p className="text-white text-center mt-10">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (productos.length === 0) return <p className="text-white text-center mt-10">No se encontraron productos</p>;

  return(
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">{subcategoriaLabel}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {productos.map((producto) => (
          <div key={producto.id} className="p-4 border rounded bg-gray-900 text-white flex flex-col">
            <img
              src={`http://localhost:8000${producto.foto1}`}
              alt={producto.nombre}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">{producto.nombre}</h3>
            <p className="mt-1 text-[#67aaf1] font-semibold">${producto.precio.toLocaleString()}</p>
            {producto.oferta && <span className="text-red-500 font-bold mt-1">¡En oferta!</span>}
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;







/*import React from "react";
import { useCarrito } from "../context/CarritoContext";

export default function Productos({ productos }) {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {productos.map((producto) => (
        <div key={producto.id} className="p-4 border rounded">
          <h3 className="font-bold">{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}*/
