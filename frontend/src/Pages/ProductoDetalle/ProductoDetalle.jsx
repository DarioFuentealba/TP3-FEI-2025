import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CarritoContext } from "../../context/CarritoContext";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";

const ProductoDetalle = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [esFav, setEsFav] = useState(false);
  const [imagenPrincipal, setImagenPrincipal] = useState("");

  useEffect(() => {
    const fetchProducto = async () => {
      try{
        const token = localStorage.getItem("access"); // JWT
        const res = await axios.get(`http://localhost:8000/api/computacion/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducto(res.data);
        setEsFav(esFavorito(res.data.id));
        setImagenPrincipal(res.data.foto || "");
      }catch (err){
        console.error("Error al cargar producto:", err);
      }finally{
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  if(loading) return <p className="text-white text-center mt-10">Cargando...</p>;
  if(!producto) return <p className="text-white text-center mt-10">Producto no encontrado</p>;

  const imagenes = Object.keys(producto)
    .filter(key => key.toLowerCase().startsWith("imagen") && producto[key])
    .map(key => producto[key]);

  const handleToggleFavorito = () => {
    const nuevoEstado = toggleFavorito(producto);
    setEsFav(nuevoEstado);
  };

  return(
    <div className="max-w-[1300px] mx-auto mt-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      
      {/* Miniaturas */}
      <div className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px]">
        {imagenes.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${producto.nombre} miniatura ${idx + 1}`}
            className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition
              ${imagenPrincipal === imgSrc ? "border-[#67aaf1]" : "border-gray-500 hover:border-white"}`}
            onMouseEnter={() => setImagenPrincipal(imgSrc)}
          />
        ))}
      </div>

      {/* Imagen principal */}
      <div className="relative rounded-lg flex items-center justify-center p-2">
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="w-full h-auto max-h-[600px] object-contain rounded-lg"
          />
        )}
        <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2 cursor-pointer">
          <IconoCorazon activo={esFav} onClick={handleToggleFavorito} />
        </div>
      </div>

      {/* Detalles */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{producto.nombre}</h1>
        <p className="text-lg text-[#67aaf1] font-semibold">${producto.precio.toLocaleString()}</p>
        {producto.oferta && <span className="text-red-500 font-bold">¡En oferta!</span>}

        <p><strong>Marca:</strong> {producto.marca}</p>
        <p><strong>Sistema operativo:</strong> {producto.sistemaOperativo}</p>
        <p><strong>Uso:</strong> {producto.usos}</p>
        <p><strong>Memoria RAM:</strong> {producto.memoria_ram}</p>
        <p><strong>Almacenamiento:</strong> {producto.almacenamiento}</p>
        <p>
          <strong>Pantalla:</strong> {producto.pantalla_tamanio}{" "}
          {producto.pantalla_tactil ? "(Táctil)" : ""}
        </p>
        <p><strong>GPU dedicada:</strong> {producto.gpu_dedicada}</p>
        <p><strong>Procesador:</strong> {producto.procesador}</p>

        <div className="flex gap-4 mt-4">
          <button
            className="bg-[#67aaf1] text-black font-bold px-6 py-3 rounded-full"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;




/*import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { data } from "../../BDCompus";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
import {useProductos} from '../../BDCompus';

const ProductoDetalle = () => {
  const { subcategoriaLabel,id } = useParams();
  const {productos:data} =useProductos();
  const producto = data.find(p => p.id === Number(id)&&
    (p.subcategoriaLabel?.nombre?.toLowerCase()===subcategoriaLabel.toLocaleLowerCase())
  );

  const [esFav, setEsFav] = useState(false);
  const [imagenPrincipal, setImagenPrincipal] = useState("");

  useEffect(() => {
    if (producto) {
      setEsFav(esFavorito(producto.id));
      setImagenPrincipal(producto.imagena || "");
    }
  }, [producto]);

  if (!producto) return <p className="text-white text-center mt-10">Producto no encontrado</p>;

  // Obtengo todas las imágenes (imagena, imagenb, imagenc, etc.)
  const imagenes = Object.keys(producto)
    .filter(key => key.toLowerCase().startsWith("imagen") && producto[key])
    .map(key => producto[key]);

  const handleToggleFavorito = () => {
    const nuevoEstado = toggleFavorito(producto);
    setEsFav(nuevoEstado);
  };

  return (
    <div className="max-w-[1300px] mx-auto mt-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      
      */{/* Columna miniaturas */}/*
      <div className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px] bg-[red]">
        {imagenes.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${producto.nombre} miniatura ${idx + 1}`}
            className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition
              ${imagenPrincipal === imgSrc ? "border-[#67aaf1]" : "border-gray-500 hover:border-white"}`}
            onMouseEnter={() => setImagenPrincipal(imgSrc)} // cambia al pasar el mouse
          />
        ))}
      </div>

    */  {/* Columna imagen principal */}/*
      <div className="relative rounded-lg flex items-center justify-center p-2 bg-[blue]">
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="w-full h-auto max-h-[600px] object-contain rounded-lg"
          />
        )}

      */  {/* Corazón */}/*
        <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2 cursor-pointer">
          <IconoCorazon activo={esFav} onClick={handleToggleFavorito} />
        </div>
      </div>

     */ {/* Columna detalles */}/*
      <div className="flex flex-col gap-4 bg-[green]">
        <h1 className="text-3xl font-bold">{producto.nombre}</h1>
        <p className="text-lg text-[#67aaf1] font-semibold">${producto.salary.toLocaleString()}{producto.precio.toLocaleString()}</p>
        {producto.oferta && <span className="text-red-500 font-bold">¡En oferta!</span>}
        
        <p><strong>Marca:</strong> {producto.marca}</p>
        <p><strong>Sistema operativo:</strong> {producto.sistemaOperativo}</p>
        <p><strong>Uso:</strong> {producto.usos}</p>
        <p><strong>Memoria RAM:</strong> {producto.memoria_ram}</p>
        <p><strong>Almacenamiento:</strong> {producto.almacenamiento}</p>
        <p>
          <strong>Pantalla:</strong> {producto.pantalla_tamanio}{" "}
          {producto.pantalla_tactil === "Si" ? "(Táctil)" : ""}
        </p>
        <p><strong>GPU dedicada:</strong> {producto.gpu_dedicada}</p>
        <p><strong>Procesador:</strong> {producto.procesador}</p>

       */ {/* Botones */}/*
        <div className="flex gap-4 mt-4">
          <button className="bg-[#67aaf1] text-black font-bold px-6 py-3 rounded-full">
            Comprar
          </button>
          <button className="bg-gray-700 text-white font-bold px-6 py-3 rounded-full">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
*/