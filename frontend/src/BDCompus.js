
import { useApi } from "./hooks/useApi";

export const useProductos = () => {
  // Usamos directamente el hook base, sin lógica condicional adicional
  const { data, loading, error } = useApi("todos_los_productos");
  //console.log("📦 useProductos render:", data);

  return {
    productos: data || [],  // Fallback por si data es null
    loading,
    error
  };
};

