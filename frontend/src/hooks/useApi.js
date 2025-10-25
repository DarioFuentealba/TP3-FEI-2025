import { useEffect, useState,useCallback } from "react";
import { api } from "../api/computacionApi";

/**
 * Hook genérico para consumir recursos de la API.
 * 
 * @param {string} resource - El recurso (ej: "cpus", "gpus", "rams").
 */
export const useApi = (resource) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // obtener lista de recursos
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await api(resource).list();
      setData(result);
    } catch (err) {
      console.error("❌ Error en fetchData:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [resource]);
  // Obtiene por ID
  // dentro de useApi.js
  
  const fetchById = async (id) => {
    try {
      setLoading(true);
      const result = await api(resource).retrieve(id); // método de detalle
      setData([result]); // guardamos solo ese objeto en un array
      return result;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // crear recurso
  const createItem = async (item) => {
    try {
      const newItem = await api(resource).create(item);
      setData((prev) => [...prev, newItem]);
      return newItem;
    } catch (err) {
      setError(err);
    }
  };

  // actualizar recurso
  const updateItem = async (id, updatedItem) => {
    try {
      const newItem = await api(resource).update(id, updatedItem);
      setData((prev) =>
        prev.map((item) => (item.id === id ? newItem : item))
      );
      return newItem;
    } catch (err) {
      setError(err);
    }
  };

  // eliminar recurso
  const deleteItem = async (id) => {
    try {
      await api(resource).delete(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  //console.log("🌀 useApi render:", resource, "=>", data);


  return { data, loading, error,fetchById, fetchData, createItem, updateItem, deleteItem };
};
