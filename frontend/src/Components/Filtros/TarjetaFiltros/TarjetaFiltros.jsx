import TituloFiltros from "../TituloFiltros/TituloFiltros";
import CheckboxFiltros from "../CheckboxFiltros/CheckboxFiltros";
import RadioButtonFiltros from "../RadioButtonFiltros/RadioButtonFiltros";
import SliderInputRangeFiltros from "../SliderInputRangeFiltros/SliderInputRangeFiltros";

const TarjetaFiltros = ({ titulo, tipo, opciones, rango, valor, onChange }) => {
    return(
        <div className="border rounded-lg p-3 shadow-sm bg-gray-50">
        <TituloFiltros texto={titulo} />

        {tipo === "checkbox" &&
            opciones.map((op, i) => (
            <CheckboxFiltros
                key={i}
                label={op}
                checked={valor.includes(op)}
                onChange={() => {
                let nuevoValor = valor.includes(op)
                    ? valor.filter((v) => v !== op)
                    : [...valor, op];
                onChange(nuevoValor);
                }}
            />
            ))}

        {tipo === "radio" &&
            opciones.map((op, i) => (
            <RadioButtonFiltros
                key={i}
                label={op}
                checked={valor === op}
                onChange={() => onChange(op)}
            />
            ))}

        {tipo === "slider" && (
            <SliderInputRangeFiltros
            min={rango[0]}
            max={rango[1]}
            value={valor}
            onChange={onChange}
            />
        )}
        </div>
    );
};

export default TarjetaFiltros;
