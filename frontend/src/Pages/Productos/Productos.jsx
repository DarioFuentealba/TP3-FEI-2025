import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductos } from '../../BDCompus';
import { useCategorias } from '../../utils/categorias';
import TarjetaProducto from "../../Components/Tarjeta/TarjetaProducto/TarjetaProducto";
import Animacion from "../../Components/Animacion/Animacion";
// import { useEffect } from "react";

const Productos = () => {
    const { subcategoriaLabel } = useParams();
    const { productos, loading: loadingProductos } = useProductos();
    const { mapeoNombres, loading: loadingCategorias } = useCategorias();

    useEffect(()=>{
        //console.log(" Productos Actualizados : ", productos);
    },[productos])
    
    // ⏳ Estado de carga
    if (loadingProductos || loadingCategorias) {
        return (
            <Animacion 
            texto="Cargando productos..." 
            src="https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json" 
            />
        );
    }
    //console.log("📦 Total productos:", productos);

    // 🔍 Obtener el ID de la subcategoría desde el nombre
    const subcategoriaId = mapeoNombres[subcategoriaLabel];


     //console.log("🎯 productos desde componente:", productos.subcategoria);
    //  console.log("📦 MAPEO NOMBRE:", mapeoNombres);
    //  console.log("🏷️ subcategoriaLabel desde URL:", subcategoriaLabel);
    //  console.log("🆔 subcategoriaId obtenido del mapeo:", subcategoriaId);

    
    
    const productosFiltrados = productos.filter(producto => {
    const subcat = producto.subcategoria;
    const subcatId = subcat?.id ?? subcat; // Si es objeto, usa subcat.id; si es número, usa subcat
    const subcatNombre = subcat?.nombre ?? subcat;
       
    // Comparar por ID
    if (subcategoriaId && subcatId === subcategoriaId) {
        return true;
    }

    // Comparar por nombre
    if (subcatNombre === subcategoriaLabel) {
        return true;
    }

    // Comparar por usos (caso especial)
    if (producto.usos === subcategoriaLabel) {
        return true;
    }

    return false;
    });

    
    // // 📦 Filtrar productos por subcategoría ID
    // const productosFiltrados = productos.filter(producto => {
    //     // Comparar por ID de subcategoría

    //     if (subcategoriaId && producto.subcategoria?.id === subcategoriaId) {
    //         return true;
    //     }
        
    //     // Fallback: Si no hay ID, intentar por nombre (para compatibilidad)
    //     if (producto.subcategoria?.nombre === subcategoriaLabel) {
    //         return true;
    //     }

    //     // También buscar en usos (para categorías tipo "Gamer", "Oficina", etc.)
    //     if (producto.usos === subcategoriaLabel) {
    //         return true;
    //     }
        
    //     return false;
    // });
    
    //console.log("🔎 Subactegoria LAbel :", subcategoriaLabel);
   //console.log("✅ Productos filtrados:", productosFiltrados);

    // ⚠️ Si no hay productos
    if (productosFiltrados.length === 0) {
        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">{subcategoriaLabel}</h2>
                <Animacion 
                    texto={`No hay productos disponibles en "${subcategoriaLabel}"`}
                    src="https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json" 
                />
            </div>
        );
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">{subcategoriaLabel}</h2>
            <p className="text-gray-400 text-center mb-4">
                {productosFiltrados.length} {productosFiltrados.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {productosFiltrados.map((producto) => (
                    <TarjetaProducto key={producto.id} producto={producto} label={subcategoriaLabel}/>
                ))}
            </div>
        </div>
    );
};

export default Productos;
