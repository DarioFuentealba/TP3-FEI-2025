import React, { useState } from 'react';

function FormularioRegistro() {
    // 1. Usa useState para gestionar el estado de todos los campos.
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });

    // 2. Controla los cambios de cada campo del formulario.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }));
    };

    // 3. Controla el envío del formulario.
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue.
        console.log('Datos del formulario enviados:', formData);
        // Aquí puedes añadir tu lógica para enviar los datos a una API, por ejemplo.
        alert('Formulario enviado. Revisa la consola para ver los datos.');
    };

    return(
        <div className="flex justify-center items-center min-h-screen bg-transparent">
            <div 
                className="flex flex-col gap-4 p-6 rounded-lg w-full max-w-3xl m-4
                bg-[#d9d9d9]
                dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
            >
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center text-[#00FF84] text-3xl font-semibold mb-6">
                        Formulario de Registro
                    </h2>

                    {/* Nombre de usuario */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-4 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="nombre">Nombre de usuario:</label>
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-4 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-4 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Apellido */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-4 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="apellido">Apellido:</label>
                        <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-4 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Confirmar contraseña */}
                    <div className="grid grid-cols-2 gap-4 items-center mb-6 text-[#000000] dark:text-[#00FF84]">
                        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                        <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border border-gray-400 dark:border-[#00FF84] bg-white dark:bg-black"
                        />
                    </div>

                    {/* Botón */}
                    <div className="text-center">
                        <button 
                        className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] 
                        hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 
                        hover:shadow-[0_0_15px_#ffffff]
                        dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] 
                        dark:hover:bg-[#00FF84] dark:hover:text-black 
                        dark:hover:shadow-[0_0_15px_#00FF84]"
                        >
                        Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioRegistro;