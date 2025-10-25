import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from '../../Components/Animacion/Animacion';
import { Link } from "react-router-dom";
import { useCarrito } from '../../context/CarritoContext';

const Computadoras = () => {
    const { categoria } = useParams(); 
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { agregarAlCarrito } = useCarrito(); // contexto para agregar al carrito

    // Traer productos desde la API del backend
    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const res = await axios.get(`http://localhost:8000/api/computacion/productos/`);
                setProductos(res.data); // res.data debe ser un array de productos
            }catch (err){
                console.error("Error cargando productos:", err);
            }finally{
                setLoading(false);
            }
        };
        fetchProductos();
    }, []);

    // Filtrar productos por subcategoría (o categoría según tu BD)
    const productosFiltrados = productos.filter(
        p => p.subcategoria?.toLowerCase() === categoria.toLowerCase()
    );

    if(loading){
        return(
            <Animacion 
                texto="loading" 
                src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" 
            />
        );
    }

    if(productosFiltrados.length === 0){
        return(
            <Animacion 
                texto={`No hay productos de tipo ${categoria}`} 
                src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" 
            />
        );
    }

    return(
        <div className="min-h-screen bg-[#1c1c1c] text-[#ebeef3] font-mono p-6 max-w-screen-lg mx-auto">
            <Titulo texto={`Computadoras: ${categoria}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {productosFiltrados.map((compu) => (
                    <div key={compu.id} className="bg-[#2b2b2b] p-4 rounded-2xl border border-[#67aaf1]/20 shadow hover:shadow-lg transition-all">
                        {/* Si querés usar imagenes, agregalas al modelo Producto y serializer */}
                        <h2 className="text-lg font-semibold text-[#67aaf1]">{compu.nombre}</h2>
                        {compu.marca && <p className="text-md text-[#b7c2ce]">{compu.marca}</p>}
                        <p className="text-xl font-bold text-[#67aaf1]">${compu.precio}</p>

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

export default Computadoras;



/*import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data as productos } from '../../BDCompus';
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from '../../Components/Animacion/Animacion';
import { Link } from "react-router-dom";

const Computadoras = () => {
    const { categoria } = useParams(); // la categoría viene de la URL
    const [loading, setLoading] = useState(true);

    // Filtrar productos por tipo (PCEscritorio o Notebooks)
    const productosFiltrados = productos.filter(
        p => p.tipo.toLowerCase() === categoria.toLowerCase()
    );

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Animacion texto="loading" src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />
        );
    }

    if (productosFiltrados.length === 0) {
        return (
            <Animacion texto={`No hay productos de tipo ${categoria}`} src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />
        );
    }

    return (
        <div className="min-h-screen bg-[#1c1c1c] text-[#ebeef3] font-mono p-6 max-w-screen-lg mx-auto">
            <Titulo texto={`Computadoras: ${categoria}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {productosFiltrados.map((compu, index) => (
                    <Link key={index} to={`/info/${compu.nombre}`}>
                        <div className="bg-[#2b2b2b] p-4 rounded-2xl border border-[#67aaf1]/20 shadow hover:shadow-lg transition-all">
                            <img 
                                src={compu.imagen} 
                                alt={compu.nombre} 
                                className="w-full h-40 object-contain mb-2 rounded-xl"
                            />
                            <h2 className="text-lg font-semibold text-[#67aaf1]">{compu.nombre}</h2>
                            <p className="text-md text-[#b7c2ce]">{compu.marca}</p>
                            <p className="text-xl font-bold text-[#67aaf1]">${compu.salary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Computadoras;*/
