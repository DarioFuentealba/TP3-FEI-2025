
//import React from 'react';
//import Carrusel from '../../Components/CarruselImagenProducto/Carrusel';
//import React, { useEffect, useState } from "react";
import TarjetaCategoria from "../../Components/Tarjeta/TarjetaCategoria/TarjetaCategoria";
import {useCategorias} from "../../utils/categorias";
//import { useApi } from '../../hooks/useApi';

const Home = () => {
  const {categorias,loading,error} = useCategorias();

 // console.log(categorias);
  if (loading) return <p>Cargando ......</p>
  if (error) return <p>Error al cargar las categorias</p>

  return (
    <div className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Object.values(categorias).map((categoria) => (
        <TarjetaCategoria key={categoria.nombre || categoria.id} categoria={categoria} />
      ))}

    </div>
  );
};

export default Home;


/*import Titulo from "../../Components/Titulo/Titulo";
import TarjetaCategoria from "../../Components/Tarjeta/TarjetaCategoria/TarjetaCategoria";
import categorias from "../../utils/categorias";

>>>>>>> main

function Home2() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {Object.values(categorias).flat().map((categoria) => (
                <TarjetaCategoria key={categoria.name} categoria={categoria} />
            ))}
        </div>
    );
}

export default Home2;*/

/*function Home2() {
    return (
        <div>
            <Carrusel/>

        </div>
    );
}

export default Home2;
*/