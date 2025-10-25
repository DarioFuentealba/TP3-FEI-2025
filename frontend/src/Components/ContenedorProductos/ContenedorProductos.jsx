import { useState, useEffect } from 'react';
import TarjetaProducto from '../Tarjeta/TarjetaProducto/TarjetaProducto';
import InputBusqueda from '../InputBusqueda/InputBusqueda';
import Animacion from '../Animacion/Animacion';

const ContenedorProductos = ({ productos }) => {
    const [filtro, setFiltro] = useState("");
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if(productos && Array.isArray(productos)){
            const timeout = setTimeout(() => {
                setCargando(false);
            }, 600);

            return () => clearTimeout(timeout);
        }
    }, [productos]);

    const normalizarTexto = (texto) => texto.toLowerCase();

    if(!productos || !Array.isArray(productos)){
        return(
            <Animacion texto={"Cargando"} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"} />
        )
    }

    const filtrados = productos.filter(prod =>
        normalizarTexto(prod.nombre).includes(filtro.toLowerCase()) || normalizarTexto(prod.categoria).includes(filtro.toLowerCase())
    );

    const noResults = filtrados.length === 0 && filtro.length > 0;

    return(
        <div>
            <div className="p-4 m-4">
                <InputBusqueda value={filtro} onChange={setFiltro} />
            </div>

            {cargando ? (
                <Animacion texto={"Cargando"} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
            ) : (
                    <>
                        {noResults ? (
                        <Animacion texto={(`Sin resultados para "${filtro}"`)} src={"https://lottie.host/e77a65c3-25d1-423b-9dd6-e6774ff153c3/zGThR5teVM.json"}/> 
                    ) : (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 mt-8"> 
        
                        
                        {filtrados.map(producto => (
                            <TarjetaProducto key={producto.id} producto={producto} />
                        ))}
                    </div>
                    )}
                    </>
                )}
                
            </div>
        );
};

export default ContenedorProductos;

