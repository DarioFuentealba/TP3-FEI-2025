import React, { useState } from "react";

const Garantia = () => {
    const [form, setForm] = useState({
        nombre: "",
        domicilio: "",
        telefono: "",
        correo: "",
        factura: "",
        fecha: "",
        falla: "",
        archivo: null,
    });

    const [errores, setErrores] = useState({});
    const [open, setOpen] = useState(null); // null | "politica" | "formulario"

    const validar = () => {
        const nuevosErrores = {};
        if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
        if (!form.domicilio.trim()) nuevosErrores.domicilio = "El domicilio es obligatorio";
        if (!/^\d+$/.test(form.telefono)) nuevosErrores.telefono = "Sólo se permiten números";
        if (!form.correo.trim() || !/\S+@\S+\.\S+/.test(form.correo))
        nuevosErrores.correo = "Correo electrónico inválido";
        if (!/^\d+$/.test(form.factura)) nuevosErrores.factura = "Sólo se permiten números";
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.fecha))
        nuevosErrores.fecha = "Formato inválido (dd/mm/aaaa)";
        if (!form.falla.trim()) nuevosErrores.falla = "Describa la falla";
        if (!form.archivo) nuevosErrores.archivo = "Debe subir el comprobante de la factura";
        else if (form.archivo.type !== "application/pdf") nuevosErrores.archivo = "El archivo debe ser PDF";
        else if (form.archivo.size > 5 * 1024 * 1024) nuevosErrores.archivo = "El archivo no puede superar los 5 MB";

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            alert("Formulario enviado correctamente 🎉");
            setForm({
                nombre: "",
                domicilio: "",
                telefono: "",
                correo: "",
                factura: "",
                fecha: "",
                falla: "",
                archivo: null,
            });
            setErrores({});
        }
    };

    return(
        <div className="max-w-5xl mx-auto p-8 mt-10 space-y-4">

            {/* Botón Política */}
            <button
                onClick={() => setOpen(open === "politica" ? null : "politica")}
                className={`w-full rounded-2xl p-6 text-3xl font-bold transition transform hover:scale-[1.02] border text-center
                border-[#1F2937] dark:border-[#00FF84]
                ${
                    open === "politica"
                        ? // 🔹 Estado ACTIVO (abierto)
                        `bg-white text-[#1F2937] shadow-[0_0_20px_#1F2937]
                        dark:bg-black dark:text-[#00FF84] dark:shadow-[0_0_20px_#00FF84]`
                        : // 🔸 Estado NORMAL + HOVER
                        `bg-[#1F2937] text-white shadow-lg
                        hover:bg-white hover:text-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                        dark:bg-black dark:text-[#00FF84]
                        dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_20px_#00FF84]`
                }`}
                style={{
                    boxShadow:
                        open === "politica"
                            ? "0 0 20px #1F2937" // 🔹 Forzamos sombra gris visible al estar abierto (modo claro)
                            : undefined,
                }}
            >
                Política de reembolso y garantía
            </button>

            {/* Política */}
            <div
            className={`p-6 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
            ${open === "politica" ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
            >
                <div 
                    className="p-6 rounded-b-2xl text-white shadow-inner border
                    bg-[#1F2937] border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                    dark:bg-black dark:border-[#00FF84]  dark:hover:shadow-[0_0_20px_#00FF84]"
                >
                    <p className="text-center mb-4">
                    Notebooks, Impresoras, Monitores tienen 10 días de garantía. Productos Logitech y Seagate: dirigirse al servicio oficial indicado.
                    </p>
                    <ul className="list-none text-center space-y-2">
                        <li>• ACER 0800-444-1318</li>
                        <li>• ASUS 0800-122-0563</li>
                        <li>• BANGHO 0810-888-2264 — Pedro Goyena 252, Córdoba</li>
                        <li>• BROTHER 0810-222-7684</li>
                        <li>• DELL 0800-666-0789</li>
                        <li>• EPSON 0800-288-3776 / 011-51670400</li>
                        <li>• HP NOTEBOOKS y MONITORES 0800-345-6588</li>
                        <li>• LENOVO 0800-666-0011 / 0800-222-0279 (L a V de 9 a 18 h)</li>
                        <li>• LG 0810-555-5454</li>
                        <li>• LOGITECH 0800-555-3284</li>
                        <li>• PHILLIPS 0800-444-7749 (L a V de 8 a 20 h — Sáb 8 a 14 h)</li>
                        <li>• SAMSUNG 0800-333-3733</li>
                        <li>
                            • SEAGATE — Registrar el producto en{" "}
                            <a
                            href="https://www.seagate.com/la/es/support/warranty-and-replacements/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00FF84] underline hover:text-[#00cc6a]"
                            >
                            este enlace
                            </a>
                        </li>
                        <li>• WACOM 0800-333-0108</li>
                    </ul>
                    <p className="text-center mt-4">
                    Luego de generar el ticket, el mismo tiene una validez de un mes para continuar con el envío al sector de RMA.
                    </p>
                </div>
            </div>

            {/* Botón Formulario */}
            <button
                onClick={() => setOpen(open === "formulario" ? null : "formulario")}
                className={`w-full rounded-2xl p-6 text-3xl font-bold transition transform hover:scale-[1.02] border text-center
                border-[#1F2937] dark:border-[#00FF84]
                ${
                    open === "formulario"
                        ? // 🔹 Estado ACTIVO (abierto)
                        `bg-white text-[#1F2937] shadow-[0_0_20px_#1F2937]
                        dark:bg-black dark:text-[#00FF84] dark:shadow-[0_0_20px_#00FF84]`
                        : // 🔸 Estado NORMAL + HOVER
                        `bg-[#1F2937] text-white shadow-lg
                        hover:bg-white hover:text-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                        dark:bg-black dark:text-[#00FF84]
                        dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_20px_#00FF84]`
                }`}
                style={{
                    boxShadow:
                        open === "formulario"
                            ? "0 0 20px #1F2937"
                            : undefined,
                }}
            >
                Formulario de Garantía
            </button>
            
            {/* Formulario */}
            <div
                className={`p-6 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
                ${open === "formulario" ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
            >
                <div 
                    className="p-6 rounded-b-2xl text-white shadow-inner border
                    bg-[#1F2937] border-[#1F2937]  hover:shadow-[0_0_20px_#1F2937]
                    dark:bg-black dark:border-[#00FF84]  dark:hover:shadow-[0_0_20px_#00FF84]"
                >

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Campos flotantes */}
                        {[
                            { name: "nombre", label: "Nombre y apellido", type: "text" },
                            { name: "domicilio", label: "Domicilio", type: "text" },
                            { name: "telefono", label: "Teléfono", type: "text" },
                            { name: "correo", label: "Correo electrónico", type: "email" },
                            { name: "factura", label: "Factura de compra", type: "text" },
                            { name: "fecha", label: "Fecha de compra (dd/mm/aaaa)", type: "text" }
                        ].map(campo => (
                            <div key={campo.name} className="relative">
                                <input
                                    type={campo.type}
                                    id={campo.name}
                                    name={campo.name}
                                    value={form[campo.name]}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className={`peer w-full border rounded px-4 py-3 focus:outline-none focus:ring-2
                                        border-white focus:ring-[#ffffff] bg-[#1F2937] text-white
                                        dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]
                                        transition-all duration-200 ${errores[campo.name] ? "border-red-500 focus:ring-red-500" : ""}`}
                                />
                                <label
                                    htmlFor={campo.name}
                                    className={`absolute left-4 transition-all duration-200
                                    ${form[campo.name] ? "-top-3 text-sm" : "top-3 text-base"}
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                    peer-focus:-top-3 peer-focus:text-sm px-1
                                    text-white peer-placeholder-shown:text-gray-300 peer-focus:text-white peer-focus:bg-[#1F2937] bg-[#1F2937]
                                    dark:text-[#00FF84] dark:peer-placeholder-shown:text-green-700 dark:peer-focus:text-[#00FF84] dark:peer-focus:bg-[#000000] dark:bg-[#000000]`}
                                >
                                    {campo.label}
                                </label>
                                {errores[campo.name] && (
                                    <p className="text-red-500 text-sm mt-1">{errores[campo.name]}</p>
                                )}
                            </div>
                        ))}

                        {/* Falla */}
                        <div className="relative mt-6">
                            <textarea
                                id="falla"
                                name="falla"
                                value={form.falla}
                                onChange={handleChange}
                                rows="5"
                                placeholder=" "
                                className={`peer w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 resize-none transition-all
                                border-white focus:ring-[#ffffff] bg-[#1F2937] text-white
                                dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]
                                ${errores.falla ? "border-red-500 focus:ring-red-500" : ""}`}
                            />
                            <label
                                htmlFor="falla"
                                className={`absolute left-4 transition-all duration-200
                                ${form.falla ? "-top-3 text-sm" : "top-3 text-base"}
                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base  
                                peer-focus:-top-3 peer-focus:text-sm px-1
                                text-white peer-placeholder-shown:text-gray-300 peer-focus:text-white peer-focus:bg-[#1F2937]
                                dark:text-[#00FF84] dark:peer-placeholder-shown:text-green-700 dark:peer-focus:text-[#00FF84] dark:peer-focus:bg-[#000000]`}
                            >
                                Falla o problema detectado
                            </label>
                            {errores.falla && <p className="text-red-500 text-sm mt-1">{errores.falla}</p>}
                        </div>

                        {/* Subir archivo */}
                        <div className="relative mt-6">
                            <label htmlFor="archivo" className="block mb-2 text-base text-white dark:text-[#00FF84]">
                                Foto de la factura (PDF, máx 5MB)
                            </label>
                            <input
                                type="file"
                                id="archivo"
                                name="archivo"
                                accept=".pdf"
                                onChange={handleChange}
                                className={`block w-full text-sm border rounded px-4 py-3 cursor-pointer focus:outline-none transition-all
                                border-white focus:ring-2 focus:ring-[#ffffff] bg-[#1F2937] text-white
                                dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]
                                file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                                file:text-sm file:font-semibold file:bg-[#ffffff] file:text-[#000000]
                                hover:file:bg-[#1F2937] hover:file:text-[#ffffff]
                                dark:file:bg-[#00FF84] dark:file:text-[#000000] dark:hover:file:bg-[#00FF84]/90
                                ${errores.archivo ? "border-red-500 focus:ring-red-500" : ""}`}
                            />
                                {errores.archivo && <p className="text-red-500 text-sm mt-1">{errores.archivo}</p>}
                        </div>

                        {/* Mensaje informativo */}
                        <div className="p-3 rounded-md text-sm border font-bold bg-[#ffffff] border-white text-[#1F2937] dark:bg-green-300 dark:border-green-300 dark:text-black">
                            <p>POR FAVOR, ASEGÚRATE DE COMPLETAR TODOS LOS CAMPOS ANTES DE ENVIAR EL FORMULARIO.</p>
                            <p>UN TECNICO SE COMUNICARA CON USTED VIA MAIL PARA CONFIRMARLE LOS PASOS A SEGUIR.</p>
                            <p>EL SECTOR DE RMA SE ENCUENTRA EN Calle Falsa 123 - Neuquén.</p>
                        </div>

                        {/* Botón enviar */}
                        <div className='pt-10 mt-4 text-center'>
                            <button
                                type="submit"
                                className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#b7c2ce]
                                dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Garantia;
