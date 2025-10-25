const BotonFiltros = ({ label, onClick }) => {
    return(
        <button
        onClick={onClick}
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
        {label}
        </button>
    );
};

export default BotonFiltros;
