import axios from "axios";
import { useUser } from "../../../context/UserContext";

function BotonFinalizarCompra({ onCompraFinalizada }) {
    const { accessToken } = useUser(); // asumimos que tu contexto expone accessToken

    const handleFinalizar = async () => {
        try{
            const res = await axios.post(
                "http://localhost:8000/api/carrito/finalizar/",
                {}, // cuerpo vacío
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            alert(res.data.message);
            onCompraFinalizada(); // refresca carrito
        }catch(error){
            alert(error.response?.data?.error || "Error al finalizar la compra");
        }
    };

    return(
        <button
            onClick={handleFinalizar}
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#b7c2ce]
            dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
        >
            Finalizar compra
        </button>
    );
}

export default BotonFinalizarCompra;