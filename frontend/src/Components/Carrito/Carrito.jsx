import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const { carrito } = useContext(CarritoContext);

  return (
    <div>
      <h2>Mi Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((item) => (
          <div key={item.id}>
            {item.producto_nombre} x{item.cantidad} - ${item.producto_precio}
          </div>
        ))
      )}
    </div>
  );
}

export default Carrito;


{/*import React from "react";
import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const { carrito, actualizarItem, eliminarItem } = useCarrito();

  if (!carrito.length) return <p>Tu carrito está vacío</p>;

  return (
    <div>
      {carrito.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.producto_nombre} - ${item.producto_precio}</span>
          <input
            type="number"
            value={item.cantidad}
            min="1"
            onChange={(e) => actualizarItem(item.id, e.target.value)}
            className="w-16 border rounded text-center"
          />
          <button
            onClick={() => eliminarItem(item.id, item.producto_nombre)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Carrito;*/}