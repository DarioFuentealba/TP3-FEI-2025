import { useMoneda } from "../../context/MonedaContext";
import { useState, useEffect } from "react";

const Precio = ({ precioARS }) => {
    const { moneda } = useMoneda();
    const [precio, setPrecio] = useState(precioARS);

    useEffect(() => {
        const convertir = async () => {
            try{
                if(moneda === "USD"){
                    const resp = await fetch("https://dolarapi.com/v1/dolares/oficial");
                    const data = await resp.json();
                    setPrecio(precioARS / data.venta);
                }else{
                    setPrecio(precioARS);
                }
            }catch (error){
                console.error("Error al obtener la cotización:", error);
                setPrecio(precioARS);
            }
        };
        convertir();
    }, [moneda, precioARS]);

    const formato = moneda === "ARS" ? "es-AR" : "en-US";
    const precioFormateado = new Intl.NumberFormat(formato, {
        style: "currency",
        currency: moneda === "ARS" ? "ARS" : "USD",
        minimumFractionDigits: 2,
    }).format(precio);

    return(
        <span>
        {moneda === "ARS"
            ? precioFormateado.replace("$", "$ ")
            : "U$S " + precio.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
    );
};

export default Precio;

