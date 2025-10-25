import { useState, useEffect } from "react";
//import BotonIrArriba from "../../../assets/Imagenes/Iconos/BotonIrArriba/BotonIrArriba.svg";
//import { ReactComponent as BotonIrArriba } from '../../../assets/Imagenes/Iconos/BotonIrArriba/BotonIrArriba.svg';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if(window.scrollY > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <button
            onClick={scrollToTop}
            className={`group fixed bottom-6 right-6 z-50 w-24 h-24 rounded-full border-3 border-[#00FF84] bg-black text-[#00FF84] flex flex-col items-center justify-between p-2 shadow-lg transition-all duration-200 ${
              isVisible ? "flex" : "hidden"
            } hover:drop-shadow-[0_0_8px_#00FF84]`}
            title="Ir arriba"
          >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-[#00FF84]"
          >
            <path
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
            className="group-hover:[stroke-dasharray:100] group-hover:[stroke-dashoffset:100] group-hover:animate-draw"
          />

          </svg>
          <span className="text-[10px] mb-1 group-hover:drop-shadow-[0_0_8px_#00FF84]">
            Ir arriba
          </span>
          <span className="relative group">
            Ir arriba
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FF84] transition-all duration-500 group-hover:w-full"></span>
          </span>
        </button>
    );
};

export default ScrollToTopButton;
