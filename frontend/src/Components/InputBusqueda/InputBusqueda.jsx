import { Player } from '@lottiefiles/react-lottie-player';

const InputBusqueda = ({ onChange, value }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value);
    };
    return (
        <div className="relative w-full">
            <input value={value} onChange={handleChange} placeholder={"Ingrese nombre del producto o categoría"}
                className="text-[#000000] pl-12 p-2 border-4 rounded w-full transition duration-300 ease-in-out focus:ring-2 
                border-[#67aaf1] focus:border-blue-300 focus:ring-blue-300 hover:shadow-[0_0_6px_#3b82f6,0_0_12px_#3b82f6]
                dark:border-[#00FF84] dark:focus:border-[#00FF84] dark:focus:ring-[#00FF84] dark:hover:shadow-[0_0_6px_#00FF84,0_0_12px_#00FF84]"
            />
            
            <Player autoplay loop
                src="https://lottie.host/038fb609-9cc2-4142-9508-16accf4caf70/HkWizi8LVJ.json" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 w-6 h-6 md:w-11 md:h-11"
            />
        </div>
    );
};

export default InputBusqueda;

