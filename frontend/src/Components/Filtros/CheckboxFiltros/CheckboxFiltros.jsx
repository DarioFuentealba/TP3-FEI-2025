const CheckboxFiltros = ({ label, checked, onChange }) => {
    return(
        <label className="flex items-center space-x-2 cursor-pointer">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="accent-blue-600"
        />
        <span>{label}</span>
        </label>
    );
};

export default CheckboxFiltros;
