import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Player } from "@lottiefiles/react-lottie-player";
import { ROUTES } from '../../const/routes';
import IconoConversorMoneda from '../Icono/IconosHeader/IconoConversorMoneda/IconoConversorMoneda';
import IconoCarrito from '../Icono/IconosHeader/IconoCarrito/IconoCarrito';
import IconoUsuarioLogin from '../Icono/IconosHeader/IconoUsuarioLogin/IconoUsuarioLogin';
import IconoUsuarioLogout from '../Icono/IconosHeader/IconoUsuarioLogout/IconoUsuarioLogout';
import IconoDinero from '../Icono/IconosHeader/IconoDinero/IconoDinero';
import IconoNotebook from '../Icono/IconosHeader/IconoNotebook/IconoNotebook';
import IconoTrabajador from '../Icono/IconosHeader/IconoTrabajador/IconoTrabajador';
import IconoHardware from '../Icono/IconosHeader/IconoHardware/IconoHardware';
import IconoPeriferico from '../Icono/IconosHeader/IconoPeriferico/IconoPeriferico';
import IconoSoftware from '../Icono/IconosHeader/IconoSoftware/IconoSoftware';
import IconoHerramienta from '../Icono/IconosHeader/IconoHerramienta/IconoHerramienta';
import IconoCorazon from '../Icono/IconosHeader/IconoCorazon/IconoCorazon';
import IconoLapiz from '../Icono/IconosHeader/IconoLapiz/IconoLapiz';
import BotonConIcono from "../Botones/BotonBarraInicio/BotonConIcono/BotonConIcono";
import Usos from "../../Pages/Usos/Usos";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useMoneda } from "../../context/MonedaContext";
import MenuItem from "@mui/material/MenuItem";
import {useUser} from "../../context/UserContext";
import Avatar  from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const BarraInicio = () => {

    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { moneda, toggleMoneda } = useMoneda();
    const {user,logout,chekingAuth} =useUser();
    const[anchorEl,setAnchorEl] =useState();
   //console.log(user);

    const handleAvatarClick=(event)=>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose=()=>{
        setAnchorEl(null);
    }

    const handleLogout=()=>{
        logout();
        handleClose();
        navigate("/login");
    }

    const handlePerfil=()=>{
        handleClose();
        navigate(`/perfil/${user.id}`);
    }

    if (chekingAuth) {
        return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
        </Box>
        );
    }

    return(
        <div
            className='w-full border-b transition-all z-50
            border-[#1F2937]/20 shadow-[0_0_12px_#1F2937] bg-[#1F2937]
            dark:border-[#00FF84]/20 dark:shadow-[0_4px_6px_-1px_#00FF84] dark:bg-[#000000]'
        > 
            {/*menu responsive*/}
            <div className='flex justify-end sm:hidden p-4'> 
                <button className='text-white text-2xl' onClick={() => setMenuAbierto(!menuAbierto)}>
                    <Player 
                        autoplay loop src="https://lottie.host/89e726a2-4450-4325-896e-22e1a31b73db/TY7qQ0MQ8V.json"  
                        style={{ height: 40, width: 40 }}
                    />
                </button>
            </div>

            <div className="mx-auto flex justify-between items-start p-4">
                
                {/* Columna 1: Logo */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Columna 2: Resto de la barra */}
                <div className="flex-1 flex flex-col gap-2">

                    {/* Fila superior: botones de usuario */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex gap-4">
                            <ThemeToggle /> {/* Boton DarkMode */}

                            {/* Botón de cambio de moneda */}
                            <BotonConIcono
                                texto={`Cambiar a ${moneda === "ARS" ? "USD" : "ARS"}`}
                                icono={IconoConversorMoneda}
                                onClick={toggleMoneda}
                            />
                        </div>
                        {/**MUESTRA EL ICONO SOLO PARA EL USUARIO ADMINISTRADOR  */}
                        {user?.isAdm && (
                            <AdminPanelSettingsIcon sx={{fontSize:35, color:"#ff9800", cursor:"pointer"}} 
                            onClick={() => navigate(`/administrador/${user.id}`)}>
                                {/* <AdminPanelSettings /> */}
                            </AdminPanelSettingsIcon>
                        )}

                            {/**  CONTROLA EL ICONO DE LOGIN Y LOGOUT  */}
                        <div className="flex gap-4">
                            {user ? (
                                <>
                                <BotonConIcono icono={IconoCarrito} texto="Carrito" onClick={() => navigate("/carrito")} />
                                <BotonConIcono icono={IconoCorazon} texto={"Favoritos"} onClick={() => {navigate(`${ROUTES.favoritos}`); setMenuAbierto(false); }}/>
                                <Avatar
                                onClick={handleAvatarClick}
                                sx={{ cursor: "pointer", bgcolor: "indigo" }}
                                >
                                {user.username?.charAt(0).toUpperCase() ?? "?"}
                                </Avatar>

                                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    navigate(`/perfil/${user.id}`);
                                }}>
                                    Perfil
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </>
                            ) : (
                            <BotonConIcono
                                icono={IconoUsuarioLogin}
                                texto="Login"
                                onClick={() => navigate("/login")}
                            />
                            )}  
                            {/* Aca va el avatar */}
                        </div>
                    </div>

                    {/* Fila inferior: botones de navegación */}
                    <div className="flex flex-wrap gap-2 justify-between">
                        {/* Boton Ofertas */}
                        <BotonConIcono icono={IconoDinero} texto="Ofertas" onClick={() => navigate("/categoria/Ofertas")} />
                        
                        {/* Boton Computadoras */}
                        <DropdownMenu icono={IconoNotebook} texto="Computadoras" categorias={[]}>
                            <Link to="/categoria/Computadoras" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Ver categorías de computadoras</Link>
                            <Link to="/productos/PC%20Escritorio" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">PC de escritorio</Link>
                            <Link to="/productos/Notebook" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Notebooks</Link>
                        </DropdownMenu>
                        
                        {/* Boton Usos */}
                        <DropdownMenu icono={IconoTrabajador} texto="Uso de PC" categorias={Usos}>
                            <Link to="/categoria/Uso" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Ver categorías de uso</Link>
                            <Link to="/productos/Gamer" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Gamer</Link>
                            <Link to="/productos/Oficina" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Hogar y oficina</Link>
                            <Link to="/productos/Diseño" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">Diseño</Link>
                        </DropdownMenu>

                        {/* Boton Hardware */}
                        <DropdownMenu icono={IconoHardware} texto="Hardware" categorias={[]}>
                            <Link to="/categoria/Hardware" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Ver categorías de hardware
                            </Link>
                            <Link to="/productos/Cpu" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Microprocesador
                            </Link>
                            <Link to="/productos/Motherboard" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Motherboard
                            </Link>
                            <Link to="/productos/Cooler" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Cooler
                            </Link>
                            <Link to="/productos/Ram" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Memoria Ram
                            </Link>
                            <Link to="/productos/Gpu" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Placa de video
                            </Link>
                            <Link to="/productos/Disco" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Disco
                            </Link>
                            <Link to="/productos/Gabinete" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Gabinete
                            </Link>
                            <Link to="/productos/placa_wifi" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Placa wifi
                            </Link>
                            <Link to="/productos/Fuente" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Fuente
                            </Link>
                        </DropdownMenu>

                        {/* Boton Perifericos */}
                        <DropdownMenu icono={IconoPeriferico} texto="Periféricos" categorias={[]}>
                            <Link to="/categoria/Perifericos" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Ver categorías de periféricos
                            </Link>
                            <Link to="/productos/Monitor" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Monitor
                            </Link>
                            <Link to="/productos/Mouse" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Mouse
                            </Link>
                            <Link to="/productos/Teclado" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Teclado
                            </Link>
                        </DropdownMenu>

                        {/* Boton Software */}
                        <DropdownMenu icono={IconoSoftware} texto="Software" categorias={[]}>
                            <Link to="/categoria/Software" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Ver categorías de software
                            </Link>
                            <Link to="/productos/Sistema_Operativo" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Sistema operativo
                            </Link>
                            <Link to="/productos/Paquete_office" className="block px-4 py-2 rounded 
                            bg-[#1F2937] hover:bg-gray-700 text-white hover:text-[#00FF84] 
                            dark:bg-[#000000] dark:hover:text-[#00FF84]">
                                Paquete office
                            </Link>
                        </DropdownMenu>

                        {/* Boton Armar PC */}
                        <BotonConIcono icono={IconoHerramienta} texto="Armar PC" onClick={() => alert("Botón clickeado!")} />

                        {/* Boton Tu PC ideal */}
<Link to="/encuesta">
  <BotonConIcono
    icono={IconoLapiz}
    texto="Tu PC ideal"
  />
</Link>
                    </div>
                </div>

                {/* Columna 3: Avatar */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

            </div>
        </div>
    );
};

export default BarraInicio;


