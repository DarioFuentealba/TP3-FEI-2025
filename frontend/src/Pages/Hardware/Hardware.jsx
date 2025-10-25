import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProductos } from "../../BDCompus";
import { useCategorias } from "../../utils/categorias";
import Titulo from "../../Components/Titulo/Titulo";
import Animacion from "../../Components/Animacion/Animacion";
import { getImageUrl } from "../../api/apiUrlImagen";

const Hardware = () => {
    const { categoria, subCategoria } = useParams();
    const [loading, setLoading] = useState(true);
    const { productos } = useProductos();
    const { mapeo } = useCategorias();

    const idsSubCategoria = mapeo[categoria] || [];
    const productosFiltrados = productos.filter(p => idsSubCategoria.includes(p.subcategoria));

    console.log('dentro del componente');

    useEffect(() => {

    if (productos.length > 0 || Object.keys(mapeo).length > 0) {
        console.log("=== Productos ===");
        console.table(productos.map(p => ({
        nombre: p.nombre,
        subcategoria: p.subcategoria,
        foto1: p.foto1
        })));


    }
    }, [productos, mapeo, categoria]);





  // Pequeño delay visual
  useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Esperar hasta tener datos
  if (loading || !productos.length || !Object.keys(mapeo).length) {
    return <Animacion texto="Cargando datos..." src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />;
  }


  if (productosFiltrados.length === 0) {
    return <Animacion texto="No hay productos en esta categoría" src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />;
  }

  return (
    <div className="min-h-screen p-6 max-w-screen-lg mx-auto">
      <Titulo className="text-black text-5xl" texto={subCategoria ? `${categoria}-${subCategoria}`:categoria} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {productosFiltrados.map((compu) => (
          <div key={compu.id} className="p-4 bg-[#2b2b2b] rounded shadow">
            <img src={getImageUrl(compu.foto1)} alt={compu.nombre} className="w-full h-48 object-contain"
            onError={(e)=>
                {console.error("Error cargando:",compu.nombre);
                    console.error("URL:",e.target.src);
                    e.target.src="https://via.placeholder.com/400x300?text=Sin+Imagen";
                }}
            />
            <h2 className="text-xl font-bold mt-2">{compu.nombre}</h2>
            <p className="text-[#67aaf1] text-lg mt-1">${parseFloat(compu.precio).toLocaleString('es-AR')}</p>
            {compu.oferta && <span className="text-red-500 font-bold">¡En oferta!</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hardware;
