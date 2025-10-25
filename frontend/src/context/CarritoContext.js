import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  //Función estable para obtener headers con token
  const getHeaders = useCallback(() => {
    const token = localStorage.getItem("access");
    return token
      ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      : {};
  });

  // Traer carrito desde backend
  const fetchCarrito = async () => {
    const headers = getHeaders();
    if (!headers.Authorization) return;

    try {
      const res = await axios.get("http://localhost:8000/api/carrito/", {
        headers,
      });
      // Transformamos precio a número
      const items = (res.data.items || []).map(item => ({
        ...item,
        precio: Number(item.precio),
      }));
      setCarrito(items);
    } catch (err) {
      console.error("Error fetchCarrito:", err.response || err);
      toast.error("No se pudo cargar el carrito");
    } finally {
      setLoading(false);
    }
  };

  // Agregar o actualizar producto en carrito
const agregarAlCarrito = async (producto, cantidad = 1, modelo) => {
  try {
    const modeloNormalized = modelo.replace(/\s+/g, "").toLowerCase();

    const res = await axios.post(
      "http://localhost:8000/api/carrito/agregar/",
      { producto_id: producto.id, cantidad, modelo: modeloNormalized },
      { headers: getHeaders() }
    );

    if (res.status === 200 || res.status === 201) {
      toast.success(`${producto.nombre} agregado al carrito`);
      fetchCarrito();
    } else {
      toast.error("No se pudo agregar el producto");
    }
  } catch (err) {
    console.error(err.response || err);
    toast.error("No se pudo agregar el producto");
  }
};

  // Actualizar cantidad de un producto
const actualizarItem = async (itemId, cantidad) => {
  const headers = getHeaders();
  try {
    await axios.patch(
      `http://localhost:8000/api/carrito/${itemId}/update/`,
      { cantidad },
      { headers }
    );
    // 🔑 Refresca todo el carrito desde backend
    await fetchCarrito();
  } catch (err) {
    console.error(err.response || err);
    toast.error("No se pudo actualizar la cantidad");
  }
};

  // Eliminar producto del carrito
  const eliminarItem = async (itemId, nombre = "") => {
    const headers = getHeaders();
    try {
      await axios.delete(`http://localhost:8000/api/carrito/${itemId}/remove/`, {
        headers,
      });
      setCarrito(prev => prev.filter(item => item.id !== itemId));
      if (nombre) toast.info(`${nombre} eliminado del carrito`);
    } catch (err) {
      console.error(err.response || err);
      toast.error("No se pudo eliminar el producto");
    }
  };

  // Cargar carrito al iniciar
  useEffect(() => {
    fetchCarrito();
  }, []);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        loading,
        agregarAlCarrito,
        actualizarItem,
        eliminarItem,
        fetchCarrito 
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};















// import React, { createContext, useContext, useState, useEffect,useCallback } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const CarritoContext = createContext();
// export const useCarrito = () => useContext(CarritoContext);

// export const CarritoProvider = ({ children }) => {
//   const [carrito, setCarrito] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getToken = () => localStorage.getItem("access");

//   const getHeaders = () => {
//     const token = getToken();
//     return token
//        { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
//       : {};
//   };
//   const fetchCarrito = useCallback(async () => {
//   const headers = getHeaders();
//   if (!headers.Authorization) return;

//   try {
//     const res = await axios.get("http://localhost:8000/api/carrito/", {
//       headers,
//     });
//     setCarrito(res.data.items || []);
//   } catch (err) {
//     console.error("Error fetchCarrito:", err.response || err);
//     toast.error("No se pudo cargar el carrito");
//   } finally {
//     setLoading(false);
//   }
// }, [getHeaders]);

//   // const fetchCarrito = async () => {
//   //   const headers = getHeaders();
//   //   if (!headers.Authorization) return;

//   //   try {
//   //     const res = await axios.get("http://localhost:8000/api/carrito/", {
//   //       headers,
//   //     });
//   //     setCarrito(res.data.items || []);
//   //   } catch (err) {
//   //     console.error("Error fetchCarrito:", err.response || err);
//   //     toast.error("No se pudo cargar el carrito");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const agregarAlCarrito = async (producto, cantidad = 1) => {
//     const headers = getHeaders();
//     if (!headers.Authorization) {
//       toast.error("Debes iniciar sesión para agregar productos");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:8000/api/carrito/",
//         { producto_id: producto.id, cantidad },
//         { headers }
//       );
//       toast.success(`${producto.nombre} agregado al carrito`);
//       fetchCarrito();
//     } catch (err) {
//       console.error("Error agregarAlCarrito:", err.response || err);
//       toast.error(err.response?.data?.error || "No se pudo agregar el producto");
//     }
//   };

//   const actualizarItem = async (itemId, cantidad) => {
//     const headers = getHeaders();
//     try {
//       await axios.patch(
//         `http://localhost:8000/api/carrito/${itemId}/update/`,
//         { cantidad },
//         { headers }
//       );
//       fetchCarrito();
//     } catch (err) {
//       console.error(err.response || err);
//       toast.error("No se pudo actualizar la cantidad");
//     }
//   };

//   const eliminarItem = async (itemId, nombre = "") => {
//     const headers = getHeaders();
//     try {
//       await axios.delete(`http://localhost:8000/api/carrito/${itemId}/remove/`, {
//         headers,
//       });
//       fetchCarrito();
//       if (nombre) toast.info(`${nombre} eliminado del carrito`);
//     } catch (err) {
//       console.error(err.response || err);
//       toast.error("No se pudo eliminar el producto");
//     }
//   };

//   useEffect(() => {
//     fetchCarrito();
//   }, [fetchCarrito]);

//   return (
//     <CarritoContext.Provider
//       value={{ carrito, loading, agregarAlCarrito, actualizarItem, eliminarItem }}
//     >
//       {children}
//     </CarritoContext.Provider>
//   );
// };



{/*import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const getToken = () => localStorage.getItem("access");

  const getHeaders = () => {
    const token = getToken();
    return token
      ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      : {};
  };

  const fetchCarrito = async () => {
    const headers = getHeaders();
    if (!headers.Authorization) return; // no hay token

    try {
      const res = await axios.get("http://localhost:8000/api/carrito/", {
        headers,
      });
      setCarrito(res.data.items || []);
    } catch (err) {
      console.log("Error fetchCarrito:", err.response || err);
      toast.error("No se pudo cargar el carrito");
    }
  };

  const agregarAlCarrito = async (producto, cantidad = 1) => {
    const headers = getHeaders();
    if (!headers.Authorization) {
      toast.error("Debes iniciar sesión para agregar productos");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/carrito/",
        { producto_id: producto.id, cantidad },
        { headers }
      );
      setCarrito(prev => {
      // si ya está en el carrito, sumamos la cantidad
      const existente = prev.find(i => i.producto_id === producto.id);
      if (existente) {
        return prev.map(i =>
          i.producto_id === producto.id
            ? { ...i, cantidad: i.cantidad + cantidad }
            : i
        );
      }
      // si es nuevo, lo agregamos
      return [
        ...prev,
        {
          id: Date.now(), // temporal, hasta que se refresque del backend
          producto_id: producto.id,
          producto_nombre: producto.nombre,
          producto_precio: producto.precio,
          cantidad,
        },
      ];
    });

    toast.success(`${producto.nombre} agregado al carrito`);
    fetchCarrito(); // y de paso sincronizamos con backend

    } catch (err) {
      console.log("Error agregarAlCarrito:", err.response || err);
      toast.error(err.response?.data?.error || "No se pudo agregar el producto");
    }
  };

  const actualizarItem = async (itemId, cantidad) => {
    const headers = getHeaders();
    try {
      await axios.patch(
        `http://localhost:8000/api/carrito/${itemId}/update/`,
        { cantidad },
        { headers }
      );
      fetchCarrito();
      toast.success("Cantidad actualizada");
    } catch (err) {
      console.log(err.response || err);
      toast.error("No se pudo actualizar la cantidad");
    }
  };

  const eliminarItem = async (itemId, nombre = "") => {
    const headers = getHeaders();
    try {
      await axios.delete(`http://localhost:8000/api/carrito/${itemId}/remove/`, {
        headers,
      });
      fetchCarrito();
      toast.info(`${nombre} eliminado del carrito`);
    } catch (err) {
      console.log(err.response || err);
      toast.error("No se pudo eliminar el producto");
    }
  };

  useEffect(() => {
    fetchCarrito();
  }, []);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, actualizarItem, eliminarItem }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
*/}