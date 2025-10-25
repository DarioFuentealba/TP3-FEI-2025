import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CarritoContext } from "../../context/CarritoContext";
import Animacion from "../../Components/Animacion/Animacion";
import Precio from "../../Components/MonedaToggle/Precio";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";

const Info = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [esFav, setEsFav] = useState(false);


      const camposPorCategoria = {
        //Computadoras
        pc_de_escritorio: ["marca", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistemaOperativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "gpu_dedicada", "procesador"],
        notebook: ["marca", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistemaOperativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "gpu_dedicada", "procesador"],
        //Hardware
        microprocesador: ["marca", "modelo", "nucleos", "hilos", "frecuencia", "proceso_fabricacion", "grafica_integrada", "socket", "incluye_cooler"],
        motherboard: ["marca", "memoria", "sonido", "puerto_sata", "usb", "hdmi", "vga"],
        cooler: ["marca", "color", "coolers_incluidos", "iluminacion"],
        ram: ["marca", "categoria_ram", "capacidad_gb", "latencia", "velocidad", "pin_de_memoria", "disipador_de_calor"],
        disco: ["marca", "capacidad", "velocidad", "conexion", "procesador", "gpu_dedicada"],
        placa_video: ["marca", "memoria_capacidad_gb", "memoria_tipo", "memoria_velocidad", "resolucion_max", "refrigeracion"],
        placa_wifi: ["marca", "frecuencia", "velocidad", "pantalla_tactil", "procesador", "gpu_dedicada"],
        fuente: ["marca", "eficiencia", "ventilador"],
        gabinete: ["marca", "ventana", "colores", "incluidos", "radiadores", "usb", "audio_hd", "dimensiones"],
        //Perifericos
        monitor: ["marca", "pantalla", "panel", "pantalla_tactil", "tamanio", "vga", "displayport", "usb", "hdmi", "resolucion_max"],
        mouse: ["marca", "color", "conexion", "botones", "iluminacion"],
        teclado: ["marca","color", "conexion", "iluminacion"],
        //Software
        sist_op: ["marca", "detalle"],
        office: ["marca", "detalle"],
    };

    const camposMostrar = camposPorCategoria[producto.tipo?.toLowerCase()] || ["marca", "precio"];


  // Traer producto desde API
  useEffect(() => {
    const fetchProducto = async () => {
      try{
        const token = localStorage.getItem("access"); // tu JWT guardado
        const res = await axios.get(`http://localhost:8000/api/computacion/productos/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducto(res.data);
        setImagenPrincipal(res.data.imagen || "");
        setEsFav(esFavorito(res.data.id));
      }catch (err){
        console.error("Error cargando producto:", err);
      }finally{
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);
  //console.log("Producto Seleccionado: ",producto);

  if(loading){
    return(
      <Animacion
        texto="loading"
        src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"
      />
    );
  }

  if(!producto){
    return(
      <Animacion
        texto="Producto no encontrado"
        src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"
      />
    );
  }

  // Obtener todas las imágenes (imagena, imagenb, etc.) si existen
  const imagenes = Object.keys(producto)
    .filter((key) => key.toLowerCase().startsWith("imagen") && producto[key])
    .map((key) => producto[key]);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, 1);
    toast.success(`${producto.nombre} agregado al carrito!`);
  };

  const handleToggleFavorito = () => {
    const nuevoEstado = toggleFavorito(producto);
    setEsFav(nuevoEstado);
  };

  return(
    <div className="max-w-[1300px] mx-auto mt-8 p-4 flex flex-col md:flex-row gap-6 items-start text-white">

{/* Columna miniaturas */}
<div className="flex flex-col gap-2 overflow-y-auto max-h-[500px] w-[100px] items-center p-2 bg-blue-700 dark:bg-[#000000]">
        {imagenes.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${producto.nombre} miniatura ${idx + 1}`}
            className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition ${
              imagenPrincipal === imgSrc
                ? "border-[#00FF84] shadow-lg"
                : "border-[#ffffff] hover:border-white"
            }`}
            onMouseEnter={() => setImagenPrincipal(imgSrc)}
          />
        ))}
      </div>

{/* Columna imagen principal */}
<div className="flex-1 relative rounded-lg flex flex-col items-center justify-center p-2 bg-red-600 dark:bg-[#000000]">
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-lg"
          />
        )}

        {/* Corazón */}
        <div
          className="absolute top-2 right-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-[#1F2937] dark:bg-[#000000]"
          onClick={handleToggleFavorito}
        >
          <IconoCorazon activo={esFav} />
        </div>
      </div>

{/* Columna detalles */}
<div className="flex-1 flex flex-col gap-4 p-4 rounded-lg bg-[#13de5e] dark:bg-[#000000]">
        <h1 className="text-4xl font-bold text-center border-b-2 text-[#000000] border-[#1F2937] dark:text-[#00FF84] dark:border-[#00FF84]">
          {producto.nombre}
        </h1>

        {/* Precio */}
        <p className="text-3xl font-semibold text-center text-[#000000] dark:text-[#00FF84]">
          <Precio precioARS={producto.precio} />
        </p>

        {producto.oferta && (
          <span className="font-bold text-3xl text-center text-[#FF0033]">¡En oferta!</span>
        )}

        {/* Botones */}
        <div className="flex gap-4 mt-auto justify-center">
          <button
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-lg hover:border-[#1F2937] dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-lg"
            onClick={handleAgregarAlCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;







{/*}

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CarritoContext } from "../../context/CarritoContext";
import Animacion from "../../Components/Animacion/Animacion";
import Precio from "../../Components/MonedaToggle/Precio";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";

const Info = () => {
  const { subcategoria, id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [esFav, setEsFav] = useState(false);

  // Traer producto desde API
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/computacion/${subcategoria}/${id}/`
        );
        setProducto(res.data);
        setImagenPrincipal(res.data.foto1 || "");
        setEsFav(esFavorito(res.data.id));
      } catch (err) {
        console.error("Error cargando producto:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [subcategoria, id]);

  if (loading) {
    return (
      <Animacion
        texto="Cargando producto..."
        src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"
      />
    );
  }

  if (!producto) {
    return (
      <Animacion
        texto="Producto no encontrado"
        src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"
      />
    );
  }

  // Obtener imágenes (foto1, foto2, etc.)
  const imagenes = Object.keys(producto)
    .filter((key) => key.toLowerCase().startsWith("foto") && producto[key])
    .map((key) => producto[key]);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, 1, subcategoria.toLowerCase());
    toast.success(`${producto.nombre} agregado al carrito!`);
  };

  const handleToggleFavorito = () => {
    const nuevoEstado = toggleFavorito(producto);
    setEsFav(nuevoEstado);
  };

  return (
    <div className="max-w-[1300px] mx-auto mt-8 p-4 flex gap-6 text-white">
      <div
        className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px] w-24 items-center p-2
        dark:bg-[#000000]"
      >
        {imagenes.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${producto.nombre} miniatura ${idx + 1}`}
            className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition
            ${
              imagenPrincipal === imgSrc
                ? "border-[#1F2937] dark:border-[#00FF84] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
                : "border-[#ffffff] hover:border-white"
            }`}
            onMouseEnter={() => setImagenPrincipal(imgSrc)}
          />
        ))}
      </div>

      <div
        className="flex-1 relative rounded-lg flex flex-col items-start justify-start p-2 
        dark:bg-[#000000]"
      >
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="w-full h-auto max-h-[600px] object-contain rounded-lg
            shadow-[0_0_15px_#1F2937]
            dark:hover:shadow-[0_0_15px_#00FF84] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
          />
        )}

        <div
          className="absolute top-2 right-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer
          bg-[#1F2937] 
          dark:bg-[#000000]"
          onClick={handleToggleFavorito}
        >
          <IconoCorazon activo={esFav} />
        </div>
      </div>

      <div
        className="flex-1 flex flex-col gap-4 p-2 rounded-lg m-2
        bg-[#d9d9d9] 
        dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
      >
        <h1 className="text-4xl font-bold text-center border-b-2 text-[#000000] border-[#1F2937] dark:text-[#00FF84] dark:border-[#00FF84]">
          {producto.nombre}
        </h1>

        <p className="text-3xl font-semibold text-center text-[#000000] dark:text-[#00FF84]">
          <Precio precioARS={producto.precio} />
        </p>

        {producto.oferta && (
          <span className="font-bold text-3xl text-center text-[#FF0033]">
            ¡En oferta!
          </span>
        )}

        <div className="flex gap-4 mt-auto justify-center">
          <button
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937] hover:border-[#1F2937]
            dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
            onClick={handleAgregarAlCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
*/}


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// //import { data } from "../../BDCompus";
// import {useProductos} from '../../BDCompus';
// import { toast } from "react-toastify";
// import { esFavorito, toggleFavorito } from "../../utils/favoritos";
// import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
// import Precio from "../../Components/MonedaToggle/Precio";
// import { useContext } from "react";
// import { CarritoContext  } from "../../context/CarritoContext";
// import { getImageUrl } from '../../api/apiUrlImagen';

// const Info = () => {
//     const { id } = useParams();
//     const {productos:data} = useProductos();
//     const producto = data.find(p => p.id === Number(id));

//     const { agregarAlCarrito } = useContext(CarritoContext);

//     const handleAgregarAlCarrito = () => {
//         agregarAlCarrito(producto);
//         toast.success(`${producto.nombre} agregado al carrito!`);
//     };
//     console.log("Producto en particular: ",data);

//     const [esFav, setEsFav] = useState(false);
//     const [imagenPrincipal, setImagenPrincipal] = useState("");

//     const camposPorCategoria = {
//         //Computadoras
//         pc_de_escritorio: ["fabricante", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistemaOperativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "gpu_dedicada", "procesador"],
//         notebook: ["fabricante", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistemaOperativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "gpu_dedicada", "procesador"],
//         //Hardware
//         microprocesador: ["fabricante", "modelo", "nucleos", "hilos", "frecuencia", "proceso_fabricacion", "grafica_integrada", "socket", "incluye_cooler"],
//         motherboard: ["fabricante", "memoria", "sonido", "puerto_sata", "usb", "hdmi", "vga"],
//         cooler: ["fabricante", "color", "coolers_incluidos", "iluminacion"],
//         ram: ["fabricante", "categoria_ram", "capacidad_gb", "latencia", "velocidad", "pin_de_memoria", "disipador_de_calor"],
//         disco: ["fabricante", "capacidad", "velocidad", "conexion", "procesador", "gpu_dedicada"],
//         placa_video: ["fabricante", "memoria_capacidad_gb", "memoria_tipo", "memoria_velocidad", "resolucion_max", "refrigeracion"],
//         placa_wifi: ["fabricante", "frecuencia", "velocidad", "pantalla_tactil", "procesador", "gpu_dedicada"],
//         fuente: ["fabricante", "eficiencia", "ventilador"],
//         gabinete: ["fabricante", "ventana", "colores", "incluidos", "radiadores", "usb", "audio_hd", "dimensiones"],
//         //Perifericos
//         monitor: ["fabricante", "pantalla", "panel", "pantalla_tactil", "tamanio", "vga", "displayport", "usb", "hdmi", "resolucion_max"],
//         mouse: ["fabricante", "color", "conexion", "botones", "iluminacion"],
//         teclado: ["fabricante","color", "conexion", "iluminacion"],
//         //Software
//         sist_op: ["fabricante", "detalle"],
//         office: ["fabricante", "detalle"],
//     };

//     const camposMostrar = camposPorCategoria[producto.tipo?.toLowerCase()] || ["fabricante", "precio"];

//     useEffect(() => {
//         if(producto){
//         setEsFav(esFavorito(producto.id));
//         setImagenPrincipal(producto.imagena || "");
//         }
//     }, [producto]);

//     if(!producto) return <p className="text-white text-center mt-10">Producto no encontrado</p>;

//     //Obtengo todas las imágenes (imagena, imagenb, imagenc, etc.)
//     const imagenes = Object.keys(producto)
//         .filter(key => key.toLowerCase().startsWith("imagen") && producto[key])
//         .map(key => producto[key]);

//     const handleToggleFavorito = () => {
//         const nuevoEstado = toggleFavorito(producto);
//         setEsFav(nuevoEstado);
//     };

    
//     return(
//         <div className="max-w-[1300px] mx-auto mt-8 p-4 flex gap-6 text-white">
//             {/* Columna miniaturas */}
//             <div 
//                 className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px] w-24 items-center p-2
//                 dark:bg-[#000000]">
//                 {imagenes.map((imgSrc, idx) => (
//                     <img
//                         key={idx}
//                         src={imgSrc}
//                         alt={`${producto.nombre} miniatura ${idx + 1}`}
//                         className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition
//                         ${imagenPrincipal === imgSrc ? "border-[#1F2937] dark:border[#00FF84] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]" : "border-[#ffffff] hover:border-white"}`}
//                         onMouseEnter={() => setImagenPrincipal(imgSrc)}
//                     />
//                 ))}
//             </div>

//             {/* Columna imagen principal */}
//             <div 
//                 className="flex-1 relative rounded-lg flex flex-col items-start justify-start p-2 
//                 dark:bg[#000000]"
//             >
//                 {imagenPrincipal && (
//                     <img
//                         src={imagenPrincipal}
//                         alt={producto.nombre}
//                         className="w-full h-auto max-h-[600px] object-contain rounded-lg
//                         shadow-[0_0_15px_#1F2937]
//                         dark:hover:shadow-[0_0_15px_#00FF84] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
//                     />
//                 )}

//                 {/* Corazón */}
//                 <div 
//                     className="absolute top-2 right-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer
//                     bg-[#1F2937] 
//                     dark:bg-[#000000]"
//                 >
//                         <IconoCorazon activo={esFav} onClick={handleToggleFavorito} />
//                 </div>
//             </div>

//             {/* Columna detalles */}
//             <div 
//                 className="flex-1 flex flex-col gap-4 p-2 rounded-lg m-2
//                 bg-[#d9d9d9] 
//                 dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
//             >
//                 <h1 className="text-4xl font-bold text-center border-b-2 text-[#000000] border-[#1F2937] dark:text-[#00FF84] dark:border-[#00FF84]">{producto.nombre}</h1>

//                 {/* Precio */}
//                 <p className="text-3xl font-semibold text-center text-bold text-[#000000] dark:text-[#00FF84]">
//                     <Precio precioARS={producto.precio} />
//                 </p>

//                 {producto.oferta && <span className="font-bold text-3xl text-center text-[#FF0033]">¡En oferta!</span>}

//                 {/* Campos dinámicos */}
//                 <div className="text-2xl grid grid-cols-2 gap-x-4 gap-y-2 text-[#000000] dark:text-[#ffffff]">
//                     {camposMostrar.map((campo, idx) => (
//                         <React.Fragment key={idx}>
//                             <p className="font-semibold">{campo.replace("_", " ").toUpperCase()}:</p>
//                             <p>{producto[campo]}</p>
//                         </React.Fragment>
//                     ))}
//                 </div>

//                 {/* Botones */}
//                 <div className="flex gap-4 mt-auto justify-center">
//                     <button 
//                         className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937] hover:border-[#1F2937]
//                         dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
//                     >
//                         Comprar
//                     </button>
//                     <button 
//                         className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937] hover:border-[#1F2937]
//                         dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
//                         onClick={() => agregarAlCarrito(producto.id)}
//                     >
//                         Agregar al carrito
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;
