import React from 'react'

export default function EjemploImagesCarrusel({src,alt}) {
  return (
    <img
        className = "w-full h-96 object-cove" 
        src = {src}           // w-ful => ocupa el ancho completo del contenedor
        alt = {alt}           // h-96 => altura fija de 24rem (384px)
    />                        // object-cover => la imagen cubre todo el contenedor, recortando si es necesario
  )
}
