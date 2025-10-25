import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonBarraInicio from '../Botones/BotonBarraInicio/BotonBarraInicio';
import categorias from '../../src/utils/categorias';

const DropdownMenu = ({cerrarMenu}) => {
    const [abierto, setAbierto] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setAbierto(!abierto);
    };

    // Cierra el dropdown si se hace clic fuera del mismo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setAbierto(false);                
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const clickBoton = (label) => {
        setAbierto(false);
        if (cerrarMenu) cerrarMenu();
        navigate(`/categoria/${label}`);
    };

    return(
        <div className="relative" ref={menuRef}>
            {/* Botón principal */}
            <BotonBarraInicio
                texto={"categorias"}
                className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer border-none"
                onClick={toggleDropdown}
            />

            {/* Menú desplegable */}
            {abierto && (
                <div className="absolute top-full mt-2 bg-[#262626] shadow-lg rounded z-10">
                    {categorias.map((cat) => (
                        <button
                            key={cat.label}
                            className="text-[#f9fafc] font-mono mx-auto font-bold transition duration-300 text-[1.4rem]  [text-shadow:0_0_2px_#ffffff] hover:[text-shadow:0_0_4px_#ffffff,0_0_8px_#ffffff] bg-[#262626]"
                            onClick={() => clickBoton(cat.label)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
