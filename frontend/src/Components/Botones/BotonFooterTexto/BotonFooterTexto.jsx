const BotonFooterTexto = ({ texto, className, href }) => {
    return(
        <span
            href={href || "#"}
            className={`block text-sm text-white hover:text-[#00FF84] transition duration-200 cursor-pointer ${className}`}
        >
            {texto}
        </span>
    );
};

export default BotonFooterTexto;