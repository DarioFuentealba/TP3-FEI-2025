import { Link } from "react-router-dom";
import LogoBlanco from "../../assets/Imagenes/Logo/Logo_blanco_fondo_oscuro_Footer.png";

function Logo() {
    return(
        <div className="text-center">
            <div className="flex justify-center">
                <Link to="/" className="relative group">
                    <button className="relative w-32 h-32 rounded-full bg-[#0d0d0d] overflow-hidden flex items-center justify-center transition-colors duration-0 ">

                        {/* Logo blanco - visible por defecto */}
                        <img
                            src={LogoBlanco}
                            alt="Logo blanco"
                            className="absolute w-24 h-24 object-cover transition-opacity duration-0 opacity-100"
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

export default Logo;