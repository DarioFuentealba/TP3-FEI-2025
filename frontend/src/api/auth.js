// src/api/auth.js
import axios from "axios";

const API_URL = "http://localhost:8000/";

// Creamos una instancia de Axios
const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar el token a cada request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de reponse: Intenta refrescar el token si este expira (error 401)
api.interceptors.response.use(
    (response)=>response,
    async (error)=>{
        const originalRequest=error.config;
        if(error.response && error.response.status===401 && !originalRequest._retry)
        {
            originalRequest._retry=true;
            const refresh=localStorage.getItem("refresh");
            if(refresh){
                try{
                    const res=await axios.post(`${API_URL}api/usuario/token/refresh/`,{
                        refresh,
                    });
                    const {access:newAccess}=res.data;
                    localStorage.setItem("access",newAccess);
                    originalRequest.headers.Authorization=`Bearer ${newAccess}`;
                    return api(originalRequest);
                }
                catch(error){
                    // Si falla el refresh limpia los tokens
                      console.error("Error al refrescar el token:", error);
                      localStorage.removeItem("access");
                      localStorage.removeItem("refresh");
                      window.location.href = "/login"; // redirige al login
                      return Promise.reject(error);
    
                }
            }
        }
        return Promise.reject(error);
    }
);

// Registro de usuario
export const registerUser = async (userDatos) => {
  return api.post("/api/usuario/usuarios/register/", userDatos);
};

// Login de usuario
export const loginUser = async (credenciales) => {
  return api.post("/api/usuario/login/", credenciales);
};

// Obtener usuarios (protegido)
export const getUsuarios = async () => {
  return api.get("/api/usuario/usuarios/");
};

// Obtener los datos del usuario logueado
export const getUsuarioActual = async () => {
  return api.get("/api/usuario/adm/").then((res) => res.data);
};



// Logout: Elimine los tokens
export const logoutUser=()=>{
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
}