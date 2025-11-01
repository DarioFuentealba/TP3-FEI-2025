import axios from "axios"

const API_URL = "http://127.0.0.1:8000/api/proveedor/";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiProveedor=()=>({
    // LISTA TODOS LOS PROVEEDORES 
    list: async ()=>{
        const response= await axios.get(`${API_URL}`);
        return response.data;
    },
    // RECUPERA EL PROVEEDOR SEGUN SU ID
    retrieve: async(id)=>{
        const response = await axios.get(`${API_URL}${id}`);
        return response.data;
    },
    // CREA UN PROVEEDOR 
    create: async (data)=>{
        let body=data;
        let headers={"Content-Type":"application/json"};
        const response = await axios.post(`${API_URL}`,body,{headers});
        return response.data;
    },
    update: async(id,data)=>{
        let body = data;
        let headers={"Content-Type":"application/json"};
        const response = await axios.put(`${API_URL}${id}`,body,{headers});
        return response.data;
    },
    delete: async(id)=>{
        await axios.delete(`${API_URL}${id}`);
    }


});