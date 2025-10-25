const BotonConIcono = ({ icono: Icono, texto, onClick, className = "", active = false }) => {
    const estadoColor = active ? "text-[#00FF84]" : "text-white";
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-2 px-1 py-3 rounded-2xl bg-transparent font-mono font-bold ${estadoColor} hover:text-[#00FF84] transition duration-200 cursor-pointer ${className}`}
        >
            {Icono && <Icono className="w-6 h-6 fill-current" />}
            <span className="text-[1rem]">{texto}</span>
        </div>
    );
};

export default BotonConIcono;
