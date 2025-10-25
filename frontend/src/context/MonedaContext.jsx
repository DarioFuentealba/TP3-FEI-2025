import { createContext, useState, useContext } from "react";

const MonedaContext = createContext();

export const MonedaProvider = ({ children }) => {
    const [moneda, setMoneda] = useState("ARS"); //ARS por defecto

    const toggleMoneda = () => {
        setMoneda(moneda === "ARS" ? "USD" : "ARS");
    };

    return(
        <MonedaContext.Provider value={{ moneda, toggleMoneda }}>
        {children}
        </MonedaContext.Provider>
    );
};

export const useMoneda = () => useContext(MonedaContext);
