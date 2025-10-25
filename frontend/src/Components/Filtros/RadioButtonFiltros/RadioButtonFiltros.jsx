const RadioButtonFiltros = ({ label, checked, onChange }) => {
    return(
        <label className="flex items-center space-x-2 cursor-pointer">
        <input
            type="radio"
            checked={checked}
            onChange={onChange}
            className="accent-blue-600"
        />
        <span>{label}</span>
        </label>
    );
};

export default RadioButtonFiltros;
