import React from "react";
import { useParams} from "react-router-dom";
import TarjetaCategoria from "../../Components/Tarjeta/TarjetaCategoria/TarjetaCategoria";
import { useCategorias } from "../../utils/categorias";
import Animacion from "../../Components/Animacion/Animacion";

const Subcategorias = () => {
  const { categoriaLabel } = useParams();
  //const navigate = useNavigate();
  const { categorias, loading, error } = useCategorias();

  //console.log("📦 Categoría desde URL:", categoriaLabel);
  //console.log("📋 Todas las categorías:", categorias);

  if (loading) {
    return (
      <Animacion 
        texto="Cargando subcategorías..." 
        src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" 
      />
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Error al cargar subcategorías: {error}
        </h2>
      </div>
    );
  }

  const categoriaActual = categorias.find(
    cat => cat.nombre.toLowerCase() === categoriaLabel.toLowerCase()
  );

  //console.log("🎯 Categoría encontrada:", categoriaActual);

  if (!categoriaActual) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          No se encontró la categoría "{categoriaLabel}"
        </h2>
      </div>
    );
  }

  const subcategorias = categoriaActual.subcategorias || [];

  //console.log("📋 Subcategorías:", subcategorias);

  if (subcategorias.length === 0) {
    return (
      <Animacion 
        texto={`No hay subcategorías en ${categoriaLabel}`} 
        src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" 
      />
    );
  }

  return (
    <div className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {subcategorias.map((subcat) => {
        if (!subcat.nombre) {
          console.error("❌ Subcategoría sin nombre:", subcat);
          return null;
        }

        //console.log("🏷️ Procesando subcategoría:", subcat.nombre);

        return (
          <TarjetaCategoria
            key={subcat.id}
            categoria={{
              nombre: subcat.nombre,  // ✅ Consistente con TarjetaCategoria
              imagen: subcat.imagen   // ✅ Consistente con TarjetaCategoria
            }}
            mostrarBotonProductos={true}
          />
        );
      })}
    </div>
  );
};

export default Subcategorias;