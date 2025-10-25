import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CarritoContext } from "../../context/CarritoContext";
import Animacion from "../../Components/Animacion/Animacion";
import Precio from "../../Components/MonedaToggle/Precio";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";

const InfoProducto = () => {
  const { id, subcategoria } = useParams();
  const { carrito, agregarAlCarrito } = useContext(CarritoContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [esFav, setEsFav] = useState(false);

  // Map para obtener la subcategoria correcta en la API
  const mapeoModelos = {
    cpus: "Cpu",
    motherboards: "Motherboard",
    gabinetes: "Gabinete",
    rams: "Ram",
    discos: "Disco",
    fuentes: "Fuente",
    monitores: "Monitor",
    mouses: "Mouse",
    teclados: "Teclado",
    gpus: "Gpu",
    coolers: "Cooler",
    pc_escritorios: "PC Escritorio",
    notebooks: "Notebook",
    sistemas_operativos: "Sistema_Operativo",
    placas_wifi: "placa_wifi",
    paquetes_office: "Paquete_office",
  };

  const getKeyFromValue = (value) =>
    Object.keys(mapeoModelos).find((key) => mapeoModelos[key] === value);

  const SubCategoria = getKeyFromValue(subcategoria);
  console.log("subcategoria: desde info =>", SubCategoria, "ID: ", id);

  const camposPorCategoria = {
    //Computadoras
    pc_escritorio: ["fabricante", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistema_operativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "procesador"],
    notebook: ["fabricante", "teclado_extra", "usos", "almacenamiento", "gpu_dedicada", "sistema_operativo", "pantalla_tamanio", "pantalla_tactil", "pantalla_led", "memoria_ram", "procesador"],
    //Hardware
    cpu: ["fabricante", "modelo", "nucleos", "hilos", "frecuencia", "proceso_fabricacion", "grafica_integrada", "socket"],
    motherboard: ["fabricante", "memoria", "sonido", "puerto_sata", "usb", "hdmi", "vga"],
    cooler: ["fabricante", "color", "cooler_incluidos", "iluminacion"],
    ram: ["fabricante", "capacidad_gb", "latencia", "velocidad", "pin_de_memoria", "disipador_de_calor"],
    disco: ["fabricante", "capacidad_gb", "velocidad", "conexion"],
    gpu: ["fabricante", "memoria_capacidad_gb", "memoria_tipo", "memoria_velocidad", "resolucion_max", "refrigeracion"],
    placa_wifi: ["fabricante", "frecuencia", "velocidad"],
    fuente: ["fabricante", "eficiencia", "ventilador"],
    gabinete: ["fabricante", "ventana", "colores", "incluidos", "radiadores", "usb", "audio_hd", "ancho", "alto", "profundidad"],
    //Perifericos
    monitor: ["fabricante", "pantalla", "panel", "tamanio", "vga", "display_port", "usb", "hdmi", "resolucion"],
    mouse: ["fabricante", "color", "conexion", "botones", "iluminacion"],
    teclado: ["fabricante","color", "conexion", "iluminacion"],
    //Software
    sist_op: ["fabricante", "detalle"],
    office: ["fabricante", "detalle"],
  };

// Convertir subcategoria de la URL a minúscula y reemplazar espacios/guiones si hace falta
const subCatKey = subcategoria.toLowerCase().replace(/ /g, "_");

// Luego usamos esa clave para mostrar los campos
const camposMostrar = camposPorCategoria[subCatKey] || ["fabricante"];

  useEffect(() => {
    const fetchProducto = async () => {
      try{
        const res = await axios.get(
          `http://localhost:8000/api/computacion/${SubCategoria}/${id}/`
        );
        setProducto(res.data);
        console.log("Producto cargado:", res.data);
        setImagenPrincipal(res.data.foto1 || "");
        setEsFav(esFavorito(res.data.id));
      }catch (err){
        console.error("Error cargando producto:", err);
      }finally{
        setLoading(false);
      }
    };

    fetchProducto();
  }, [SubCategoria, id]);

  if(loading)
    return(
      <Animacion
        texto="Cargando..."
        src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"
      />
    );

  if(!producto)
    return(
      <Animacion
        texto="Producto no encontrado"
        src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"
      />
    );

  //Todas las imágenes del producto
  const imagenes = Object.keys(producto)
    .filter((key) => key.toLowerCase().startsWith("foto") && producto[key])
    .map((key) => producto[key]);


const handleAgregarAlCarrito = () => {
  // Buscar si el producto ya está en el carrito
  const itemEnCarrito = carrito.find(item => item.id === producto.id);

  const cantidadActual = itemEnCarrito ? itemEnCarrito.cantidad : 0;

  if (cantidadActual + 1 > producto.stock) {
    // Limitar según stock
    toast.error(`No puedes agregar más de ${producto.stock} unidades de este producto.`);
    return;
  }

  agregarAlCarrito(producto, 1, subcategoria.toLowerCase());
  toast.success(`${producto.nombre} agregado al carrito!`);
};

  const handleToggleFavorito = () => {
    const nuevoEstado = toggleFavorito(producto);
    setEsFav(nuevoEstado);
  };

  console.log("ver lo de PC ESCRITORIO", mapeoModelos);
  return(
    <div>
      <h1
        className="text-4xl font-bold text-center border-b-2 pt-4 pb-4
        text-[#000000] border-[#000000]
        dark:text-[#00FF84] dark:border-[#00FF84]"
      >
        {producto.nombre}
      </h1>

    <div className="max-w-[1300px] mx-auto mt-8 pt-0 px-4 pb-4 flex flex-col md:flex-row gap-6 items-start text-white">

      {/* Columna miniaturas */}
      <div className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px] w-24 items-start pt-0 px-2  
      bg-transparent"
      >
        {imagenes.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${producto.nombre} miniatura ${idx + 1}`}
            className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition ${
              imagenPrincipal === imgSrc
                ? "border-3 border-[#000000] shadow-lg dark:border-[#00FF84] dark:shadow-[0_0_15px_#00FF84]"
                : "border-3 border-[#ffffff] hover:border-gray-300 dark:border-[#000000]"
            }`}
            onMouseEnter={() => setImagenPrincipal(imgSrc)}
          />
        ))}
      </div>

      {/* Columna imagen principal */}
      <div className="flex-1 relative rounded-lg flex flex-col items-start justify-start pt-0 px-2
        bg-transparent"
      >
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-lg"
          />
        )}

        {/* Corazón */}
        <div
          className="absolute top-2 right-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-gray-900"
          onClick={handleToggleFavorito}
        >
          <IconoCorazon activo={esFav} />
        </div>
      </div>

      {/* Columna detalles */}
      <div className="flex-1 flex flex-col gap-4 p-4 rounded-lg
        bg-[#1F2937]
        dark:bg-transparent"
      >

        <p
          className="text-3xl font-semibold text-center
        text-[#ffffff]
        dark:text-[#00FF84]"
        >
          <Precio precioARS={producto.precio} />
        </p>

        {producto.oferta && (
          <span className="font-bold text-3xl text-center text-red-600">
            ¡En oferta!
          </span>
        )}

        {producto.envio_gratis && (
          <span className="font-bold text-3xl text-center text-red-600">
            ¡Envío gratis!
          </span>
        )}

        {/* Campos dinámicos */}
        <div
          className="text-2xl grid grid-cols-2 gap-x-4 gap-y-2 
          text-[#ffffff] dark:text-[#00FF84]"
        >
          {camposMostrar.map((campo, idx) => (
            <React.Fragment key={idx}>
              <p className="font-semibold">{campo.replace("_", " ").toUpperCase()}:</p>
              <p>{producto[campo]}</p>
            </React.Fragment>
          ))}
        </div>

        <div className="flex gap-4 mt-auto justify-center">
          <button
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#ffffff]
            dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
            onClick={handleAgregarAlCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

    </div>
    </div>

  );
};

export default InfoProducto;

