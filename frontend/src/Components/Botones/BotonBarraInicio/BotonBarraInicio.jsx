import React from 'react';

const BotonBarraInicio = ({ texto, className, onClick }) => {
    return (
        <div className={`px-8 py-4 items-center p-2 bg-transparent self-center box-content rounded-2xl ${className}`} onClick={onClick}>
            <h1 className="text-[#f9fafc] font-mono mx-auto font-bold transition duration-300 text-[1.8rem]  [text-shadow:0_0_2px_#ffffff] hover:[text-shadow:0_0_4px_#ffffff,0_0_8px_#ffffff]">{texto}</h1>
        </div>
    );
};


export default BotonBarraInicio;