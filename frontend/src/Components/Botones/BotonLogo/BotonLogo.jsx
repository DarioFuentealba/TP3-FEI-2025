import { Link } from "react-router-dom";
import LogoBlanco from "../../../assets/Imagenes/Logo/Logo_blanco_fondo_oscuro_Footer.png";
import LogoVerde from "../../../assets/Imagenes/Logo/Logo_verde_fondo_oscuro_Footer.png";

export default function BotonLogo() {
    return(
        <div className="text-center">
            <div className="flex justify-center">
                <Link to="/" className="relative group">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="relative w-32 h-32 rounded-full overflow-hidden flex items-center justify-center transition-colors duration-0 border-3 
                        bg-[#0d0d0d] hover:drop-shadow-[0_0_8px_#ffffff]
                        dark:bg-[#0d0d0d] dark:border-[#00FF84] dark:hover:drop-shadow-[0_0_8px_#00FF84]"
                    >
                        {/* Logo blanco - visible por defecto */}
                        <img
                            src={LogoBlanco}
                            alt="Logo blanco"
                            className="absolute w-24 h-24 object-cover transition-opacity duration-0 opacity-100 group-hover:opacity-0"
                        />
            
                        {/* Logo verde - invisible por defecto */}
                        <img
                            src={LogoVerde}
                            alt="Logo verde"
                            className="absolute w-24 h-24 object-cover transition-opacity duration-0 opacity-0 group-hover:opacity-100"
                        />
                    </button>

                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        Ir a home
                    </span>
                </Link>
            </div>
        </div>
    );
};

