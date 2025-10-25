import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from "../../Components/Animacion/Animacion";
import { useCarrito } from '../../context/CarritoContext';

const Ofertas = () => {
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { agregarAlCarrito } = useCarrito();

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const res = await axios.get(`http://localhost:8000/api/computacion/productos/`);
                setProductos(res.data); // suponiendo que la API devuelve un array de productos
            }catch (err){
                console.error("Error cargando productos:", err);
            }finally{
                setLoading(false);
            }
        };
        fetchProductos();
    }, []);

    // Filtra productos por categoría y que tengan oferta
    const productosFiltrados = productos.filter(p => 
        p.subcategoria?.toLowerCase() === categoria.toLowerCase() && p.oferta === true
    );

    if(loading){
        return <Animacion texto="loading" src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />;
    }

    if(productosFiltrados.length === 0){
        return <Animacion texto="No hay productos en oferta" src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />;
    }

    return(
        <div className="min-h-screen p-6 max-w-screen-lg mx-auto">
            <Titulo texto={`Ofertas en ${categoria}`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {productosFiltrados.map((compu) => (
                    <div key={compu.id} className="p-4 bg-[#2b2b2b] rounded shadow">
                        {/* Si querés usar imagenes, agregalas al modelo Producto y serializer */}
                        <h2 className="text-xl font-bold mt-2">{compu.nombre}</h2>
                        <p className="text-[#67aaf1] text-lg mt-1">${compu.precio}</p>

                        <div className="mt-2">
                            <button
                                onClick={() => agregarAlCarrito(compu, 1)}
                                className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ofertas;



/*import { useParams } from "react-router-dom";
import { data as productos } from '../../BDCompus';
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from "../../Components/Animacion/Animacion";
import { useState, useEffect } from "react";

const Ofertas = () => {
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filtra productos por categoría y que tengan oferta
    const productosFiltrados = productos.filter(p => 
        p.tipo === categoria && p.oferta === true
    );

    if (loading) {
        return <Animacion texto="loading" src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />;
    }

    if (productosFiltrados.length === 0) {
        return <Animacion texto="No hay productos en oferta" src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />;
    }

    return (
        <div className="min-h-screen p-6 max-w-screen-lg mx-auto">
            <Titulo texto={`Ofertas en ${categoria}`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {productosFiltrados.map((compu, idx) => (
                    <div key={idx} className="p-4 bg-[#2b2b2b] rounded shadow">
                        <img src={compu.imagen} alt={compu.nombre} className="w-full h-48 object-contain" />
                        <h2 className="text-xl font-bold mt-2">{compu.nombre}</h2>
                        <p className="text-[#67aaf1] text-lg mt-1">${compu.salary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ofertas;
*/