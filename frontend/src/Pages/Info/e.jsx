import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../BDCompus";
import { esFavorito, toggleFavorito } from "../../utils/favoritos";
import IconoCorazon from "../../Components/Icono/IconoCorazon/IconoCorazonTarjetas";
import Precio from "../../Components/MonedaToggle/Precio";

const Info = () => {
    const { id } = useParams();
    const producto = data.find(p => p.id === Number(id));

    const [esFav, setEsFav] = useState(false);
    const [imagenPrincipal, setImagenPrincipal] = useState("");

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

    useEffect(() => {
        if(producto){
        setEsFav(esFavorito(producto.id));
        setImagenPrincipal(producto.imagena || "");
        }
    }, [producto]);

    if(!producto) return <p className="text-white text-center mt-10">Producto no encontrado</p>;

    //Obtengo todas las imágenes (imagena, imagenb, imagenc, etc.)
    const imagenes = Object.keys(producto)
        .filter(key => key.toLowerCase().startsWith("imagen") && producto[key])
        .map(key => producto[key]);

    const handleToggleFavorito = () => {
        const nuevoEstado = toggleFavorito(producto);
        setEsFav(nuevoEstado);
    };

    return(
        <div className="max-w-[1300px] mx-auto mt-8 p-4 flex gap-6 text-white">
            {/* Columna miniaturas */}
            <div 
                className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px] w-24 items-center p-2
                dark:bg-[#000000]">
                {imagenes.map((imgSrc, idx) => (
                    <img
                        key={idx}
                        src={imgSrc}
                        alt={`${producto.nombre} miniatura ${idx + 1}`}
                        className={`w-20 h-20 object-contain cursor-pointer border-2 rounded transition
                        ${imagenPrincipal === imgSrc ? "border-[#1F2937] dark:border[#00FF84] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]" : "border-[#ffffff] hover:border-white"}`}
                        onMouseEnter={() => setImagenPrincipal(imgSrc)}
                    />
                ))}
            </div>

            {/* Columna imagen principal */}
            <div 
                className="flex-1 relative rounded-lg flex flex-col items-start justify-start p-2 
                dark:bg[#000000]"
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

                {/* Corazón */}
                <div 
                    className="absolute top-2 right-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer
                    bg-[#1F2937] 
                    dark:bg-[#000000]"
                >
                        <IconoCorazon activo={esFav} onClick={handleToggleFavorito} />
                </div>
            </div>

            {/* Columna detalles */}
            <div 
                className="flex-1 flex flex-col gap-4 p-2 rounded-lg m-2
                bg-[#d9d9d9] 
                dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
            >
                <h1 className="text-4xl font-bold text-center border-b-2 text-[#000000] border-[#1F2937] dark:text-[#00FF84] dark:border-[#00FF84]">{producto.nombre}</h1>
                <p className="text-3xl font-semibold text-center text-bold text-[#000000] dark:text-[#00FF84]">${producto.precio.toLocaleString()}</p>

                {/* Precio */}
                <p className="text-3xl font-semibold text-center text-bold text-[#000000] dark:text-[#00FF84]">
                    <Precio precioARS={producto.precio} />
                </p>

                {producto.oferta && <span className="font-bold text-3xl text-center text-[#FF0033]">¡En oferta!</span>}

                {/* Campos dinámicos */}
                <div className="text-2xl grid grid-cols-2 gap-x-4 gap-y-2 text-[#000000] dark:text-[#ffffff]">
                    {camposMostrar.map((campo, idx) => (
                        <React.Fragment key={idx}>
                            <p className="font-semibold">{campo.replace("_", " ").toUpperCase()}:</p>
                            <p>{producto[campo]}</p>
                        </React.Fragment>
                    ))}
                </div>

                {/* Botones */}
                <div className="flex gap-4 mt-auto justify-center">
                    <button 
                        className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937] hover:border-[#1F2937]
                        dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                    >
                        Comprar
                    </button>
                    <button 
                        className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2 border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937] hover:border-[#1F2937]
                        dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Info;
