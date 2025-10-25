import { useState, useEffect } from "react";
import { useProductos } from '../../BDCompus';
import { useCategorias } from '../../utils/categorias';
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from "../../Components/Animacion/Animacion";
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto/TarjetaProducto';
import { getImageUrl } from '../../api/apiUrlImagen';

const Ofertas = () => {
  const [loading, setLoading] = useState(true);
  const { productos } = useProductos();
  const { mapeoPorId } = useCategorias(); // <-- requiere que useCategorias devuelva mapeoPorId

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filtra productos en oferta
  const productosFiltrados = (productos || []).filter(p => p.oferta === true);

  if (loading) {
    return <Animacion texto="loading" src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />;
  }

  if (productosFiltrados.length === 0) {
    return <Animacion texto="No hay productos en oferta" src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />;
  }

  return (
    <div className="min-h-screen p-6 w-full mx-auto">
      <Titulo className="text-black text-5xl" texto="Ofertas" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {productosFiltrados.map((compu, idx) => {
          // Resolvemos label si tenemos subcategoria (id) y mapeoPorId existe
          const labelFromMap = (mapeoPorId && compu.subcategoria !== undefined) ? mapeoPorId[compu.subcategoria] : undefined;

          // Pudo venir con campo 'modelo' o 'categoria' u otro: probamos eso también
          const labelCandidate = labelFromMap || compu.modelo || compu.subcategoria_nombre || compu.categoria || compu.tipo;

          // Pasamos label (puede ser undefined, TarjetaProducto se encargará de resolverlo mejor)
          return (
            <TarjetaProducto
              key={idx}
              producto={compu}
              label={labelCandidate}   // puede ser undefined, pero nunca el nombre del producto
            >
              <img src={getImageUrl(compu.foto1)} alt={compu.nombre} className="w-full h-48 object-contain" />
              <h2 className="text-xl font-bold mt-2">{compu.nombre}</h2>
              <p className="text-[#67aaf1] text-lg mt-1">${compu.precio}</p>
            </TarjetaProducto>
          );
        })}
      </div>
    </div>
  );
};

export default Ofertas;
