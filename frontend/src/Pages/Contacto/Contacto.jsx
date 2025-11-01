import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contacto = () => {
    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_se6vupq",       // ID del servicio
            "template_qpsc6e8",      // ID de la plantilla
            form.current,
            "GqO2QgIjdc6217fSk"             // Public Key
        )
        .then(
            (result) => {
            console.log("✅ Enviado:", result.text);
            alert("Mensaje enviado correctamente!");
            },
            (error) => {
            console.log("❌ Error:", error.text);
            alert("Ocurrió un error al enviar el mensaje.");
            }
        );
    };

    return(
        <div className="max-w-5xl mx-auto p-8 mt-10 space-y-10">
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-[#00FF84]">Contacto PowerTech</h1>
            <p className="text-center text-black dark:text-white">
                ¿Tenés alguna consulta, sugerencia o querés recibir asesoramiento personalizado? 
                ¡Escribinos y te responderemos a la brevedad!
            </p>

            {/* Sección de tarjetas de contacto */}
            <div 
                className="grid md:grid-cols-3 gap-6">
                <div 
                    className="rounded-lg p-6 flex flex-col items-center text-center shadow transition border-2
                    bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                    dark:bg-black dark:text-white dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
                >
                    <FaEnvelope className="text-4xl mb-4 text-white dark:text-[#00FF84]" />
                    <h3 className="text-xl font-semibold mb-2">Correo electrónico</h3>
                    <p><a href="mailto:contacto@powertech.com" className="text-[#00FF84] underline">contacto@powertech.com</a></p>
                </div>

                <div 
                    className="rounded-lg p-6 flex flex-col items-center text-center shadow transition border-2
                    bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                    dark:bg-black dark:text-white dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
                >
                    <FaPhone className="text-4xl mb-4 text-white dark:text-[#00FF84]" />
                    <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                    <p>299-412-3456</p>
                </div>

                <div 
                    className="rounded-lg p-6 flex flex-col items-center text-center shadow transition border-2
                    bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                    dark:bg-black dark:text-white dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
                >
                    <FaMapMarkerAlt className="text-white dark:text-[#00FF84] text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                    <p>Calle Falsa 123, Neuquén, Argentina</p>
                </div>
            </div>

            {/* Formulario de contacto */}
            <div 
                className="rounded-lg p-8 shadow border-2
                bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
                dark:bg-black dark:text-white dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
            >

                <h2 className="text-2xl font-bold mb-6 text-center dark:text-[#00FF84]">Enviános un mensaje</h2>
                <form className="space-y-6" ref={form} onSubmit={enviarEmail}>
                    <div className="relative">
                        <input
                            type="text"
                            id="nombre"
                            name="user_name"
                            placeholder=" "
                            className="peer w-full border rounded px-4 py-3 focus:outline-none focus:ring-2
                            border-white focus:ring-[#ffffff] bg-[#1F2937] text-white
                            dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]"
                        />
                        <label
                            htmlFor="nombre"
                            className="absolute left-4 top-3 transition-all 
                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base  
                                peer-focus:-top-3 peer-focus:text-sm px-1
                                text-transparent peer-placeholder-shown:text-gray-300 peer-focus:text-white peer-focus:bg-[#1F2937]
                                dark:text-[#00FF84] dark:peer-placeholder-shown:text-green-700 dark:peer-focus:text-[#00FF84] dark:peer-focus:bg-[#000000]"
                        >
                            Nombre
                        </label>
                    </div>

                    <div className="relative mt-6">
                        <input
                            type="email"
                            id="email"
                            name="user_email" 
                            placeholder=" "
                            className="peer w-full border rounded px-4 py-3 focus:outline-none focus:ring-2
                            border-white focus:ring-[#ffffff] bg-[#1F2937] text-white
                            dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 transition-all 
                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base  
                                peer-focus:-top-3 peer-focus:text-sm px-1
                                text-transparent peer-placeholder-shown:text-gray-300 peer-focus:text-white peer-focus:bg-[#1F2937]
                                dark:text-[#00FF84] dark:peer-placeholder-shown:text-green-700 dark:peer-focus:text-[#00FF84] dark:peer-focus:bg-[#000000]"
                        >
                            Correo electrónico
                        </label>
                    </div>

                    <div className="relative mt-6">
                        <textarea
                            id="mensaje"
                            name="message"
                            placeholder=" "
                            rows="5"
                            className="peer w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 resize-none
                            border-white focus:ring-[#ffffff] bg-[#1F2937] text-white
                            dark:border-[#00FF84] dark:focus:ring-[#00FF84] dark:bg-[#000000] dark:text-[#00FF84]"
                        ></textarea>
                        <label
                            htmlFor="mensaje"
                            className="absolute left-4 top-3 transition-all 
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base  
                                    peer-focus:-top-3 peer-focus:text-sm px-1
                                    text-transparent peer-placeholder-shown:text-gray-300 peer-focus:text-white peer-focus:bg-[#1F2937]
                                    dark:text-[#00FF84] dark:peer-placeholder-shown:text-green-700 dark:peer-focus:text-[#00FF84] dark:peer-focus:bg-[#000000]"
                        >
                            Mensaje
                        </label>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border border-[#ffffff] hover:bg-[#1F2937] hover:text-[#ffffff] transition transform hover:scale-105 hover:shadow-[0_0_15px_#b7c2ce]
                            dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
