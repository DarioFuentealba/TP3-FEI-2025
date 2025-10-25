import { useState } from "react";
import TarjetaFiltros from "../TarjetaFiltros/TarjetaFiltros";
import BotonFiltros from "../BotonFiltros/BotonFiltros";

const ContenedorFiltros = () => {
    //Estado inicial de filtros
    const filtrosIniciales = {
        categorias: [],
        envioGratis: false,
        rangoPrecio: [0, 1000],
        orden: "relevancia",
    };

    const [filtros, setFiltros] = useState(filtrosIniciales);

    //Función para actualizar un filtro
    const actualizarFiltros = (clave, valor) => {
        setFiltros({ ...filtros, [clave]: valor });
    };

    //Restaurar al estado inicial
    const restaurarFiltros = () => {
        setFiltros(filtrosIniciales);
    };

    return(
        <aside className="w-64 bg-white shadow-md p-4 space-y-4">
        {/* Filtro categorías */}
        <TarjetaFiltros
            titulo="Categorías"
            tipo="checkbox"
            opciones={["Notebooks", "PC Armadas", "Monitores"]}
            valor={filtros.categorias}
            onChange={(val) => actualizarFiltros("categorias", val)}
        />

        {/* Filtro sistema operativo */}
        <TarjetaFiltros
            titulo="Sistema Operativo"
            tipo="checkbox"
            opciones={["Chrome OS", "DOS", "Windows", "Linux", "MacOS"]}
            valor={filtros.categorias}
            onChange={(val) => actualizarFiltros("categorias", val)}
        />

        {/* Filtro envio gratis */}
        <TarjetaFiltros
            titulo="Envío Gratis"
            tipo="radio"
            opciones={["Sí", "No"]}
            valor={filtros.envioGratis}
            onChange={(val) => actualizarFiltros("envioGratis", val)}
        />

        {/* Filtro en promocion */}
        <TarjetaFiltros
            titulo="En Promoción"
            tipo="radio"
            opciones={["Sí", "No"]}
            valor={filtros.enPromocion}
            onChange={(val) => actualizarFiltros("enPromocion", val)}
        />

        {/* Filtro precio */}
        <TarjetaFiltros
            titulo="Precio"
            tipo="slider"
            rango={[0, 3000]}
            valor={filtros.rangoPrecio}
            onChange={(val) => actualizarFiltros("rangoPrecio", val)}
        />

        {/* Botón Restaurar */}
        <BotonFiltros onClick={restaurarFiltros} label="Restaurar filtros" />
        </aside>
    );
};

export default ContenedorFiltros;
