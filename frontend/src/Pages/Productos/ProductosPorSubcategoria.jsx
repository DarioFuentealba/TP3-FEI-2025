import { useState, useEffect } from "react";
import axios from "axios";

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/computacion/notebooks/");
        setProductos(res.data);
      } catch (err) {
        setError("Error al traer los productos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {productos.map((p) => (
        <div key={p.id} className="p-4 border rounded">
          <h3>{p.nombre}</h3>
          <p>Precio: ${p.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductosPage;
