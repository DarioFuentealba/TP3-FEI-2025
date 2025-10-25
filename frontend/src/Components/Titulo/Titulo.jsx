const Titulo = ({texto, className}) => {

    return(
        <a className={`font-mono  font-extrabold  tracking-widest text-[#ffffff] max-w-screen-lg mx-auto mt-10 p-6 text-center transition-all duration-300 ${className}`}
        >
                {texto}
        </a>
            
    )
}

export default Titulo;