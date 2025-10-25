import React from "react";
import {useUser} from "../../../context/UserContext"

export default function ReporteButton() {
  const {user,checkingAuth} =useUser();

  if(checkingAuth) return null;

  if (!user) {
    alert("Usuario no logeado");
    return null;
  }

  const handleClick = async () => {
    //const token = localStorage.getItem("access"); // tu JWT token guardado al hacer login

    // PETICION AL BACKEND DE USUARIO LOGEADO PARA OBTENER EL REPORTE (VER URLS DE LA APP USUARIO) 
    /*
    TODO: ACA ABAJO CAMBIE venta POR carrito
    */
    const response = await fetch("http://localhost:8000/api/carrito/reporte/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.access}`, // 🔐 Token JWT
      },
    });

    if (!response.ok) throw new Error("Error al obtener el reporte"); 

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#ffffff] text-[#000000] font-bold px-6 py-3 rounded-full border-2
      border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] hover:border-[#1F2937] transition transform hover:scale-105 hover:shadow-[0_0_15px_#1F2937]
      dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]"
    >
      📄 Descargar mi reporte
    </button>
  );
}
