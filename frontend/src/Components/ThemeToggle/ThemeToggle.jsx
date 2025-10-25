import React, { useEffect, useState } from "react";
import BotonConIcono from "../Botones/BotonBarraInicio/BotonConIcono/BotonConIcono";
import IconoSol from "../Icono/IconosHeader/IconoSol/IconoSol";
import IconoLuna from "../Icono/IconosHeader/IconoLuna/IconoLuna";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        //Chequea preferencia guardada
        if(localStorage.theme === "dark"){
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }else{
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if(isDark){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }else{
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
        setIsDark(!isDark);
    };

    return(
    <button onClick={toggleTheme} className="p-2 rounded bg-[#1F2937] dark:bg-[#000000]">
        {isDark ? (
            <BotonConIcono
                icono={IconoSol}
                texto="Modo claro"
            />
        ) : (
            <BotonConIcono
                icono={IconoLuna}
                texto="Modo oscuro"
            />
        )}
    </button>  );
};

export default ThemeToggle;
