import React from "react";
//mport { data as productos } from '../../BDCompus';
import "./Categorias.css";
import {useProductos} from '../../BDCompus';

//Componente de tarjeta de producto
const ProductoCard = ({ producto }) => {
    console.log("hola");
    return (
        <div className="producto-card">
        <div className="producto-imagen">
            <img src={`http://localhost:8000${producto.foto1}`} alt={producto.nombre} />
        </div>
        <div className="producto-info">
            <h3>{producto.nombre}</h3>
            <p>Marca: {producto.fabricante}</p>
            <p>SO: {producto.sistemaOperativo}</p>
            <p>Precio: ${producto.precio.toLocaleString()}</p>
            {producto.oferta === "Si" && <span className="badge-oferta">Oferta</span>}
            {producto.envioGratis === "Si" && <span className="badge-envio">Envío gratis</span>}
        </div>
        </div>
    );
};

const Categorias = ({ categorianombre }) => {
    const {productos} =useProductos();
  //Filtro productos por categoria
    const productosCategoria = productos.filter(
        (producto) => producto.categoria === categorianombre
    );

    return(
        <div className="categorias-container">
        <h2>{categorianombre}</h2>
        {productosCategoria.length === 0 ? (
            <p>No hay productos en esta categoría.</p>
        ) : (
            <div className="productos-grid">
            {productosCategoria.map((producto, index) => (
                <ProductoCard key={index} producto={producto} />
            ))}
            </div>
        )}
        </div>
    );
};

export default Categorias;

