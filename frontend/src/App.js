import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ROUTES } from './const/routes';
import { MonedaProvider } from './context/MonedaContext';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Carrito from "./Pages/Carrito/Carrito";
import Ofertas from "./Pages/Ofertas/Ofertas";
import Computadoras from "./Pages/Computadoras/Computadoras";
import Usos from "./Pages/Usos/Usos";
import Hardware from "./Pages/Hardware/Hardware";
import Perifericos from "./Pages/Perifericos/Perifericos";
import Software from "./Pages/Software/Software";
import Encuesta from "./Pages/Encuesta/Encuesta";
import Info from "./Pages/Info/Info";
import Favoritos from "./Pages/Favoritos/Favoritos";
import Categoria from "./Pages/Categoria/Categoria";
import Footer from "./Components/Footer/Footer";
import BotonIrArriba from "./Components/Botones/BotonIrArriba/BotonIrArriba";
import Garantia from "./Pages/Garantia/Garantia";
import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes/PreguntasFrecuentes";
import SobreNosotros from "./Pages/SobreNosotros/SobreNosotros";
import Contacto from "./Pages/Contacto/Contacto";
import AvisoLegal from "./Pages/AvisoLegal/AvisoLegal";
import Ayuda from "./Pages/Ayuda/Ayuda";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Pages/Login/Register";

import Subcategorias from "./Pages/Subcategoria/Subcategoria";
import Productos from "./Pages/Productos/Productos";
// import ProductoDetalle from "./Pages/ProductoDetalle/ProductoDetalle";
// import IconoAcer from "./Components/Icono/Marca/IconoAcer/IconoAcer";
// import IconoIntel from "./Components/Icono/Marca/IconoIntel/IconoIntel";
// import IconoAsus from "./Components/Icono/Marca/IconoAsus/IconoAsus";
// import IconoAMD from "./Components/Icono/Marca/IconoAMD/IconoAMD";
// import IconoLG from "./Components/Icono/Marca/IconoLG/IconoLG";
// import IconoRazer from "./Components/Icono/Marca/IconoRazer/IconoRazer";
//import Link from "@mui/material/Link";
import { UserProvider } from "./context/UserContext";
import PerfilUsuario from "./Pages/Perfil/PerfilUsuario";
import RutaPrivada from "./Components/RutaPrivada/RutaPrivada";
import { CarritoProvider } from "./context/CarritoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ProductosPorSubcategoria from './Pages/Productos/ProductosPorSubcategoria';
import InfoProducto from './Pages/Info/InfoProducto';
import AdminPanel from './Pages/Admin/AdminPanel';
import AdminProductos from "./Pages/Admin/AdminProductos";
import AdminFormularios from "./Pages/Admin/AdminFormularios";
//import AdminOtros from "./Pages/Admin/AdminOtros";

function App() {
  return(
    <MonedaProvider>
      <UserProvider>
        <CarritoProvider>
        
          <div className="relative min-h-screen overflow-hidden">
            {/* 🎨 SVGs decorativos en el fondo 
            <div className="absolute top-10 left-20 w-16 h-16 opacity-70"><IconoAcer /></div>
            <div className="absolute top-40 right-32 w-20 h-20 opacity-60"><IconoIntel /></div>
            <div className="absolute bottom-20 left-10 w-14 h-14 opacity-50"><IconoAsus /></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 opacity-75"><IconoAMD /></div>
            <div className="absolute top-60 left-1/2 w-12 h-12 opacity-55"><IconoLG /></div>
            <div className="absolute bottom-10 left-1/3 w-18 h-18 opacity-65"><IconoRazer /></div>*/}

        {/* Contenido principal */}
        <div className="relative z-10">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.home} element={<Home />}/>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.register} element={<Register />} />
            {/*<Route path={ROUTES.info} element={<Info />} />*/}
            <Route path={ROUTES.category} element={<Categoria />} />

            {/** RUTAS PROTEGIDAS  */}
            <Route element={<RutaPrivada/>}>
              <Route path={ROUTES.perfil} element={<PerfilUsuario/>}/>
              <Route path={ROUTES.favoritos} element={<Favoritos/>}/>
              {/** <Route path={ROUTES.carrito} element={<Carrito/>}/> */}
            </Route>

            {/** RUTA PRIVADA SOLO EL ADMINISTRADOR */}
            <Route element={<RutaPrivada adminOnly={true} />}>
              <Route  path='/administrador/:id' element={<AdminPanel/>} />
              <Route  path='/administrador/:id/:categoria/' element={<AdminProductos/>} />
              <Route  path='/administrador/:id/:categoria/:nombre' element={<AdminFormularios/>} />
            </Route>

                {/* Header */}
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/categoria/Ofertas" element={<Ofertas />} />
                <Route path="/computadoras/:categoria" element={<Computadoras />} />
                <Route path="/usos/:categoria" element={<Usos />} />
                <Route path="/hardware/:categoria/:subCategoria" element={<Hardware />} />
                <Route path="/perifericos/:categoria/:subCategoria" element={<Perifericos />} />
                <Route path="/software/:categoria/:subCategoria" element={<Software />} />

                <Route path="/armaTuPC" element={<Login />} />
                <Route path="/encuesta" element={<Encuesta />} />


                {/*<Route path="/productos/:subcategoriaLabel" element={<ProductosPorSubcategoria />} />*/}
                <Route path="/productos/:subcategoriaLabel" element={<Productos />} />
                <Route path="/info/:subcategoria/:id" element={<InfoProducto />} />

               {/*} <Route path="/productos/:subcategoriaLabel" element={<Productos />} />*/}
                <Route path="/categoria/:categoriaLabel" element={<Subcategorias />} />
{/*}                <Route path="/info/:subcategoriaLabel/:id" element={<ProductoDetalle />} />*/}

                {/* Footer */}
                <Route path="/logo" element={<Home />} />
                <Route path="/soporte" element={<Login />} />
                <Route path="/garantia" element={<Garantia />} /> 
                <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
                <Route path="/seguirMiPedido" element={<Login />} />

                <Route path="/sobreNosotros" element={<SobreNosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/avisoLegal" element={<AvisoLegal />} />
                <Route path="/ayuda" element={<Ayuda />} />
              </Routes>

              {/* ToastContainer global */}
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              <BotonIrArriba />
              <Footer />
            </div>
          </div>
        </CarritoProvider>
      </UserProvider>
    </MonedaProvider>
  );
}

export default App;
