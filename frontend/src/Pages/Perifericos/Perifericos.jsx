import { useParams } from "react-router-dom";
//import { data as productos } from '../../BDCompus';
import {useProductos} from '../../BDCompus';
import Titulo from '../../Components/Titulo/Titulo';
import Animacion from "../../Components/Animacion/Animacion";
import { useState, useEffect } from "react";

const Perifericos = () => {
    const { categoria, subCategoria } = useParams();
    const [loading, setLoading] = useState(true);
    const {productos} = useProductos();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // Filtra productos solo por tipo, sin importar si están en oferta
    const productosFiltrados = productos.filter(p => p.tipo === categoria && p.subtipo === subCategoria);

    if (loading) {
        return <Animacion texto="loading" src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" />;
    }

    if (productosFiltrados.length === 0) {
        return <Animacion texto="No hay productos en esta categoría" src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" />;
    }

    return (
        <div className="min-h-screen p-6 max-w-screen-lg mx-auto">
            <Titulo className="text-black text-5xl" texto={`${categoria} - ${subCategoria}`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {productosFiltrados.map((compu, idx) => (
                    <div key={idx} className="p-4 bg-[#2b2b2b] rounded shadow">
                        <img src={compu.imagena} alt={compu.nombre} className="w-full h-48 object-contain" />
                        <h2 className="text-xl font-bold mt-2">{compu.nombre}</h2>
                        <p className="text-[#67aaf1] text-lg mt-1">${compu.precio}</p>
                        {compu.oferta && <span className="text-red-500 font-bold">¡En oferta!</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perifericos;
