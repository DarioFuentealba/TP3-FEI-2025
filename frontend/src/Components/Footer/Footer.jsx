import { Link } from "react-router-dom";
import Titulo from '../Titulo/Titulo';
import BotonFooterTexto from '../Botones/BotonFooterTexto/BotonFooterTexto';
import BotonLogo from '../Botones/BotonLogo/BotonLogo';
import FacebookFooter from '../Botones/BotonesRedesFooter/Facebook';
import XFooter from '../Botones/BotonesRedesFooter/X';
import InstagramFooter from '../Botones/BotonesRedesFooter/Instagram';
import TikTokFooter from '../Botones/BotonesRedesFooter/Tiktok';
import YoutubeFooter from '../Botones/BotonesRedesFooter/Youtube';

const Footer = () => {

    return(
        <footer className="bg-[#1F2937] py-6 mt-10 shadow-[0_-4px_6px_-1px_#1F2937] dark:bg-[#000000] dark:shadow-[0_-4px_6px_-1px_#00FF84]">
            <div className="max-w-screen-xl mx-auto px-4 space-y-8">

                {/* Fila 1: 5 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left">

                    {/* Fila 1: Columna 1: Secciones Top */}
                    <div className="flex flex-col justify-start items-center text-center md:text-left space-y-1">
                        <Link to="#" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Secciones top"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="#" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Arma tu PC"} />
                        </Link>
                        <Link to="#" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Tu PC ideal"} />
                        </Link>
                        <Link to="categoria/Ofertas" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Ofertas"} />
                        </Link>
                    </div>

                    {/* Fila 1: Columna 2: Computadoras */}
                    <div className="flex flex-col justify-start items-center text-center md:text-left space-y-1">
                        <Link to="/Categoria/Computadoras" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Computadoras"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="/productos/PC%20Escritorio" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"PC de escritorio"} />
                        </Link>
                        <Link to="/productos/Notebook" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Notebooks"} />
                        </Link>
                    </div>

                    {/* Fila 1: Columna 3: Hardware */}
                    <div className="flex flex-col justify-start items-center text-center md:text-left space-y-1">
                        <Link to="/categoria/Hardware" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Hardware"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="/productos/Cpu" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Microprocesadores"} />
                        </Link>
                        <Link to="/productos/Motherboard" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Placas madre"} />
                        </Link>
                        <Link to="/productos/Cooler" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Coolers"} />
                        </Link>
                        <Link to="/productos/Ram" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Memorias"} />
                        </Link>
                        <Link to="/productos/Disco" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Discos"} />
                        </Link>
                        <Link to="/productos/Gpu" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Placas de video"} />
                        </Link>
                        <Link to="/productos/Fuente" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Fuentes"} />
                        </Link>
                        <Link to="/productos/Gabinete" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Gabinetes"} />
                        </Link>
                    </div>

                    {/* Fila 1: Columna 4: Usos */}
                    <div className="flex flex-col justify-start items-center text-center md:text-left space-y-1">
                        <Link to="/Categoria/Uso" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Usos"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="/productos/Gamer" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Gamer"} />
                        </Link>
                        <Link to="/productos/Oficina" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Hogar / Oficina"} />
                        </Link>
                        <Link to="/productos/Diseño" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Diseño gráfico"} />
                        </Link>
                    </div>

                    {/* Fila 1: Columna 5: Perifericos */}
                    <div className="flex flex-col justify-start items-center text-center md:text-left space-y-1">
                        <Link to="/categoria/Perifericos" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Periféricos"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="/productos/Monitor" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Monitor"} />
                        </Link>
                        <Link to="/productos/Mouse" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Mouse"} />
                        </Link>
                        <Link to="/productos/Teclado" className="relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Teclado"} />
                        </Link>
                    </div>
                </div>


                {/* Fila 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">

                    {/* Fila 2: columna 1: Soporte */}
                    <div className="text-center">
                        <Titulo texto={"Soporte"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        <Link to="/garantia" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Garantía"} />
                        </Link>
                        <Link to="/preguntasFrecuentes" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Preguntas frecuentes"} />
                        </Link>
                        <Link to="/seguirMiPedido" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Seguir mi pedido"} />
                        </Link>
                    </div>
                    
                    {/* Fila 2: columna 2: Logo */}
                    <BotonLogo />

                    {/* Fila 2: columna 3: Sobre nosotros */}
                    <div className="text-center">
                        <Link to="/sobreNosotros" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Sobre nosotros"} className="inline-block uppercase font-bold text-decoration-none b-v border-b-4 border-[#00FF84] mt-1 pb-1" />
                        </Link>
                        <Link to="/contacto" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Contacto"} />
                        </Link>
                        <Link to="/avisoLegal" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Aviso legal"} />
                        </Link>
                        <Link to="/ayuda" className="relative group"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <BotonFooterTexto texto={"Ayuda"} />
                        </Link>
                    </div>
                </div>


                {/* Fila 3: Redes sociales */}
                <div className="flex flex-col items-center">
                    <hr className="w-24 border-t border-[#67aaf1]/30 mb-4" />

                    <div className="flex gap-4">
                        <FacebookFooter/>
                        <XFooter/>
                        <InstagramFooter/>
                        <TikTokFooter/>
                        <YoutubeFooter/>
                    </div>
                </div>


                {/* Fila 4: 1 columna */}
                <div className="text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} PowerTech. {"rightsReserved"}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
