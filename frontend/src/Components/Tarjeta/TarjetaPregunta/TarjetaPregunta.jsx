import React, { useState } from "react";

const TarjetaPregunta = ({ pregunta, respuesta }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-64 h-40 perspective cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente */}
        <div
          className="absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg p-4 text-center border
          bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
          dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {pregunta}
        </div>

        {/* Reverso */}
        <div
          className="absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg p-4 text-center border
          bg-[#ffffff] text-black border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
          dark:bg-[#00FF84] dark:text-black dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {respuesta}
        </div>
      </div>
    </div>
  );
};

export default TarjetaPregunta;
