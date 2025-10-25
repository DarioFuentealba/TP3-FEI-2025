import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonConIcono from '../Botones/BotonBarraInicio/BotonConIcono/BotonConIcono';

const DropdownMenu = ({ cerrarMenu, icono: Icono, texto, categorias, children }) => {
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
            {/* Botón */}
            <BotonConIcono 
                icono={Icono} 
                texto={texto} 
                onClick={toggleDropdown}
                active={abierto}
            />


            {/* Menú desplegable */}
            {abierto && (
              <div className="absolute top-full mt-2 shadow-lg rounded z-10 border-2 border-[#1F2937] dark:border-[#00FF84] bg-[#1F2937] text-[#000000] dark:bg-[#000000] dark:text-[#ffffff]">
                {categorias && categorias.length > 0 ? (
                  categorias.map((cat) => (
                    <div key={cat.label}>
                      <button
                        className="block w-full text-left px-4 py-2 rounded text-[#ffffff] hover:text-[#00FF84] "
                        onClick={() => clickBoton(cat.label)}
                      >
                        {cat.name}
                      </button>
                    </div>
                  ))
                ) : (
                  // Clonamos los children para interceptar clicks y cerrar el dropdown
                  React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return child;
                    return React.cloneElement(child, {
                      onClick: (e) => {
                        e.stopPropagation();    // evita que el dropdown intercepte
                        setAbierto(false);      // cierra el dropdown
                        if (child.props.onClick) child.props.onClick(e); // respeta onClick original
                      },
                    });
                  })
                )}
              </div>
            )}
        </div>
    );
};

export default DropdownMenu;