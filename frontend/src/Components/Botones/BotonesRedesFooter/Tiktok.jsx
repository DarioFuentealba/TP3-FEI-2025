import IconoTiktok from '../../Icono/RedesSociales/IconoTiktok/IconoTiktok';

const TiktokFooter = () => {
    return(
        <button
            className="group relative w-10 h-10 flex items-center justify-center rounded-full
            bg-[#1F2937] hover:bg-white
            dark:bg-[#000000] dark:hover:bg-white"
            onClick={() => window.open('https://www.tiktok.com', '_blank')}
        >
            <IconoTiktok />

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                TikTok
            </span>
        </button>
    );
};

export default TiktokFooter;
