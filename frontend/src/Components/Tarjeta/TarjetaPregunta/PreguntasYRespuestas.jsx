import React, { useState } from "react";
import TarjetaPregunta from "./TarjetaPregunta";

const PreguntasYRespuestas = ({ titulo, preguntas }) => {
  const [open, setOpen] = useState(null);
  const isOpen = open === titulo;

  return (
    <div className="mb-6">
      {/* Botón estilo Política */}
      <button
        onClick={() => setOpen(isOpen ? null : titulo)}
        className={`w-full rounded-2xl p-6 text-3xl font-bold transition transform hover:scale-[1.02] border text-center
        border-[#1F2937] dark:border-[#00FF84]
        ${
          isOpen
            ? // 🔹 Estado ACTIVO (abierto)
              `bg-white text-[#1F2937] shadow-[0_0_20px_#1F2937]
              dark:bg-[#00FF84] dark:text-[#000000] dark:shadow-[0_0_20px_#00FF84]`
            : // 🔸 Estado NORMAL + HOVER
              `bg-[#1F2937] text-white shadow-lg
              hover:bg-white hover:text-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
              dark:bg-black dark:text-[#00FF84]
              dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_20px_#00FF84]`
        }`}
        style={{
          boxShadow: isOpen
            ? "0 0 20px #1F2937" // 🔹 Forzamos sombra gris visible en modo claro
            : undefined,
        }}
      >
        {titulo}
      </button>

      {/* Contenido desplegable */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
      >
        <div
          className="p-6 rounded-b-2xl text-white shadow-inner bg-transparent dark:bg-black"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {preguntas.map((p, i) => (
              <TarjetaPregunta key={i} pregunta={p.pregunta} respuesta={p.respuesta} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasYRespuestas;
