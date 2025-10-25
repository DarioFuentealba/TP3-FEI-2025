import ContenedorFiltros from "../../Components/ContenedorFiltros/ContenedorFiltros";

const Home = () => {
    return (
        <div className="flex">
        <ContenedorFiltros />
        <div className="flex-1 p-8 mt-8 mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {/* Aquí irían las tarjetas de productos */}
        </div>
        </div>
    );
}

export default Home;
