import {Navigate, Outlet} from "react-router-dom";
import {useUser} from "../../context/UserContext";


export default function RutaPrivada() {
    const {user} =useUser();

    // VERIFICA SI EL USUARIO ESTA LOGEADO
    if(!user){
        return <Navigate to="/login" replace/>
    }

  return <Outlet/>; 
}
// OUTLET => es un componente especial de react Router que renderiza las rutas hijas protegidas
// dentro del grupo. 