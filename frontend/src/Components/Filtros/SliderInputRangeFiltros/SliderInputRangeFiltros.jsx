import { useState } from "react";

const SliderInputRangeFiltros = ({ min, max, value, onChange }) => {
    const [minVal, setMinVal] = useState(value[0]);
    const [maxVal, setMaxVal] = useState(value[1]);

    //Aseguro que minValue no supere maxValue
    const handleMinChange = (e) => {
        const newVal = Math.min(Number(e.target.value), maxVal - 1);
        setMinVal(newVal);
        onChange([newVal, maxVal]);
    };

    //Aseguro que maxValue no sea menor a minValue
    const handleMaxChange = (e) => {
        const newVal = Math.max(Number(e.target.value), minVal + 1);
        setMaxVal(newVal);
        onChange([minVal, newVal]);
    };

    return(
        <div className="flex flex-col items-center space-y-2">
        <div className="relative w-full">
            <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={handleMinChange}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
            />
            <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
            />
        </div>
        <div className="text-gray-700">
            ${minVal} - ${maxVal}
        </div>
        </div>
    );
};

export default SliderInputRangeFiltros;
