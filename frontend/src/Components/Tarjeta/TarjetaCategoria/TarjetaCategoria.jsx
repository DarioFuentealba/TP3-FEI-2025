import { useNavigate } from 'react-router-dom';

const TarjetaCategoria = ({ categoria, mostrarBotonProductos = false, onClickBoton }) => {
    const navigate = useNavigate();

    // 🔍 Debug
     //console.log("🎴 TarjetaCategoria recibió:", categoria);
    // console.log("🏷️ Nombre:", categoria.nombre || categoria.name);

    const clickBoton = () => {
        // Si hay un handler personalizado, usarlo
        if (onClickBoton) {
            onClickBoton();
            return;
        }

        // Usar nombre o name (compatibilidad)
        const nombreCategoria = categoria.nombre || categoria.name || categoria.label;

        if (!nombreCategoria) {
            console.error("❌ No se encontró nombre de categoría:", categoria);
            return;
        }

        if (mostrarBotonProductos) {
            //console.log("🔗 Navegando a productos:", nombreCategoria);
            if(nombreCategoria === 'Hogar y Oficina'){
                navigate(`/productos/Oficina`);
            }else{
                navigate(`/productos/${nombreCategoria}`);
            }
        } else {
            //console.log("🔗 Navegando a categoría:", nombreCategoria);
            navigate(`/categoria/${nombreCategoria}`);
        }
    };

    // Obtener nombre e imagen con compatibilidad
    const nombreDisplay = categoria.nombre || categoria.name || "Sin nombre";
    const imagenDisplay = categoria.imagen || categoria.image;

    return (
        <div
            className="border-2 rounded-3xl transition p-4 min-h-[250px] w-full overflow-hidden shadow flex flex-col
            bg-[#1F2937] border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
            dark:bg-[#000000] dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-3xl bg-[#ffffff]">
                <img 
                    src={imagenDisplay} 
                    className="w-full h-full object-contain rounded-lg" 
                    alt={nombreDisplay}
                    loading="lazy"
                    onError={(e) => {
                        console.error("❌ Error cargando imagen:", nombreDisplay);
                        e.target.src = "https://via.placeholder.com/400x300?text=Sin+Imagen";
                    }}
                />
            </div>
            <div className="text-center mt-2">
                <h3 className="text-base font-semibold text-[#ebeef3]">{nombreDisplay}</h3>
                <div className='mt-4 text-center'>
                    <button
                        className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#b7c2ce]
                        dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                        onClick={clickBoton}
                    >
                        {mostrarBotonProductos ? "Ver productos" : "Ver categorías"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TarjetaCategoria;