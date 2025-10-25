import { useMoneda } from "../../context/MonedaContext";

const MonedaToggle = () => {
    const { moneda, toggleMoneda } = useMoneda();

    return(
        <button
            onClick={toggleMoneda}
            className="px-4 py-2 rounded bg-[#00FF84] text-black font-bold hover:bg-[#ffffff] hover:text-[#00FF84] transition"
        >
        Mostrar en {moneda === "ARS" ? "USD" : "ARS"}
        </button>
    );
};

export default MonedaToggle;
