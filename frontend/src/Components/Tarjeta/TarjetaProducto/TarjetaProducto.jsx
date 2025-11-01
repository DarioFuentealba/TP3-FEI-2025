import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { esFavorito, toggleFavorito } from '../../../utils/favoritos';
import IconoCorazon from '../../Icono/IconoCorazon/IconoCorazonTarjetas';
import Precio from "../../MonedaToggle/Precio";
import { getImageUrl } from '../../../api/apiUrlImagen';
import { useCategorias } from '../../../utils/categorias';

const TarjetaProducto = ({ producto, label }) => {
    const [esFav, setEsFav] = useState(false);
    const navigate = useNavigate();
    //const {mapeoNombres} =useCategorias();
    const { mapeoPorId } = useCategorias(); // <-- usamos el mapeo por ID


   //console.log("subcategoria =): ",label);

    useEffect(() => {
        setEsFav(esFavorito(producto.id));
    }, [producto.id]);

    // Mapeo exacto de Django
    // const subcategoriaMap = {
    //     1: 'pc_escritorios',
    //     2: 'notebooks',
    //     3: 'cpus',
    //     4: 'motherboards',
    //     5: 'coolers',
    //     6: 'rams',
    //     7: 'gpus',
    //     8: 'discos',
    //     9: 'gabinetes',
    //     10: 'rams',
    //     11: 'coolers',
    //     12: 'wifi',
    //     13: 'fuentes',
    //     14: 'monitores',
    //     15: 'teclados',
    //     16: 'mouses',
    //     17: 'procesador',
    //     18: 'procesadores',
    //     19: 'micro',
    //     20: 'micros',
    //     21: 'microprocesador',
    //     22: 'microprocesadores',
    //     23: 'cpu',
    //     24: 'gpu',
    //     25: 'placa_video',
    //     26: 'placasvideos',
    //     27: 'placasdevideo',
    //     28: 'placadevideo',
    //     29: 'video', //No se ven placa de video ni microprocesador
    // };

    //BUSCA EL NOMBRE DE LA SUBCATEGORIA
    const clickTarjeta = (producto) => {
       // console.log("🧩 Producto:", producto);

        const subcategoriaNombre = mapeoPorId[producto.subcategoria];

        if (subcategoriaNombre) {
            navigate(`/info/${encodeURIComponent(subcategoriaNombre)}/${producto.id}`);
        } else {
        console.warn("⚠️ No se encontró subcategoría para el producto:", producto);
            navigate(`/info/${encodeURIComponent(label)}/${producto.id}`); // fallback
        }
        //const subcatNombre = subcategoriaMap[producto.subcategoria];
        //console.log("subcategoria : ",mapeoNombres);
        //console.log("Producto ID : ",id, "Subcategoria: ",subcategoria);
       // navigate(`/info/${label}/${producto.id}`);
    };

    const handleToggleFavorito = () => {
        const nuevoEstado = toggleFavorito(producto);
        setEsFav(nuevoEstado);
    };

    
    //console.log("PRODUCTO:", producto);
    //console.log("URL ABSOLUTA : ",getImageUrl(producto.foto1));

    return(
        <div className=" border-2  rounded-3xl transition p-4 min-h-[250px] w-full overflow-hidden shadow flex flex-col
        border-[#1F2937] bg-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
        dark:border-[#00FF84] dark:bg-[#000000] dark:hover:shadow-[0_0_20px_#00FF84]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            
            <div className="relative">
                <div className="bg-[#ffffff]">
                    <img 
                        
                        src={getImageUrl(producto.foto1)} 
                        className="w-full h-80 rounded-lg object-contain" 
                        alt="Imagen del producto"
                    />
                </div>
                
                <div className="absolute top-2 right-4 z-5 rounded-full h-12 w-12 border-2 flex items-center justify-center bg-[#1F2937] border-[#ffffff]
                dark:bg-[#000000] dark:border-[#00FF84]">
                    <IconoCorazon activo={esFav} onClick={handleToggleFavorito} />
                </div>
            </div>

            <div className="flex flex-col flex-1 text-center mt-2">
                <h2 className="text-2xl font-semibold text-[#ffffff] truncate">
                    {producto.nombre}
                </h2>
                <h1 className="text-3xl font-semibold text-[#ffffff] truncate">
                {/* Precio */}
                    <p className="text-3xl font-semibold text-center text-bold text-[#ffffff] dark:text-[#00FF84]">
                        <Precio precioARS={producto.precio} />
                    </p>
                </h1>
                <div className="mt-4 text-center">
                    <button 
                        className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#ffffff]
                        dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                        onClick={() => clickTarjeta(producto)}
                    >
                        {"Detalle"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TarjetaProducto;