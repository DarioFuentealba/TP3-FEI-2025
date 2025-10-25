import IconoInstagram from '../../Icono/RedesSociales/IconoInstagram/IconoInstagram';

const InstagramFooter = () => {
    return(
        <button
            className="group relative w-10 h-10 flex items-center justify-center rounded-full
            bg-[#1F2937] hover:bg-white
            dark:bg-[#000000] dark:hover:bg-white"
            onClick={() => window.open('https://www.instagram.com', '_blank')}
        >
            <IconoInstagram />

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                Instagram
            </span>
        </button>
    );
};

export default InstagramFooter;
