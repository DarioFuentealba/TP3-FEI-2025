import { useState, useEffect } from "react";
import IrArriba from '../../Icono/IrArriba/IrArriba';

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
            className={`group fixed bottom-6 right-6 z-50 w-24 h-24 rounded-full border-3 border-[#ffffff] bg-[#1F2937] text-[#ffffff] dark:border-[#00FF84] dark:bg-black dark:text-[#00FF84] flex flex-col items-center justify-between p-2 shadow-lg transition-all duration-200 ${
                isVisible ? "flex" : "hidden"
            } hover:drop-shadow-[0_0_8px_#ffffff] dark:hover:drop-shadow-[0_0_8px_#00FF84]`}
            title="Ir arriba"
        >
            <IrArriba />
            <span className="text-[15px] mb-1 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_#ffffff] dark:group-hover:drop-shadow-[0_0_8px_#00FF84]">
                Ir arriba
            </span>
        </button>
    );
};

export default ScrollToTopButton;
