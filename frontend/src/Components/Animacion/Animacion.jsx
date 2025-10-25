import { Player } from "@lottiefiles/react-lottie-player";

const Animacion = ({texto, src, height = '300px', width = '300px'}) => {
    return (
        <div className="flex flex-col items-center justify-center h-64 space-y-4 mt-5">
            <Player
                autoplay
                loop
                src={src}
                style={{ height, width }}
                className="sm:h-48 sm:w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"
            />
            <h1 className="text-2xl font-semibold text-[#67aaf1] text-center">{texto}</h1>
        </div>
    );
};

export default Animacion;