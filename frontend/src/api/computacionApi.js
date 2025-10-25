import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/computacion/";

// ✅ Interceptor global: agrega automáticamente el token a todas las peticiones
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


/**
 * Convierte un objeto JS a FormData si contiene archivos.
 */
const toFormData = (data) => {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

/**
 * API genérica para todos los modelos de computación.
 * 
 * @param {string} resource - El recurso de la API (ej: "cpus", "gpus", "motherboards").
 */
export const api = (resource) => ({
  list: async () => {
    const response = await axios.get(`${API_URL}${resource}/`);
    return response.data;
  },

  retrieve: async (id) => {
    const response = await axios.get(`${API_URL}${resource}/${id}/`);
    return response.data;
  },

  create: async (data) => {
    let body = data;
    let headers = { "Content-Type": "application/json" };

    // Si incluye archivo (File o Blob), usamos FormData
    if (Object.values(data).some((value) => value instanceof File || value instanceof Blob)) {
      body = toFormData(data);
      headers = { "Content-Type": "multipart/form-data" };
    }

    const response = await axios.post(`${API_URL}${resource}/`, body, { headers });
    return response.data;
  },

  update: async (id, data) => {
    let body = data;
    let headers = { "Content-Type": "application/json" };

    if (Object.values(data).some((value) => value instanceof File || value instanceof Blob)) {
      body = toFormData(data);
      headers = { "Content-Type": "multipart/form-data" };
    }

    const response = await axios.put(`${API_URL}${resource}/${id}/`, body, { headers });
    return response.data;
  },

  delete: async (id) => {
    await axios.delete(`${API_URL}${resource}/${id}/`);
  },
});
