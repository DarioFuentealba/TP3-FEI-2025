import React from 'react';
import { useParams } from 'react-router-dom';
import CoolerPage from '../Cooler/CoolerPage';
import CpuPage from '../Cpu/CpuPage';
import DiscoPage from '../Disco/DisoPage';
import FuentePage from '../Fuente/FuentePage';
import GabinetePage from '../Gabinete/GabinetePage';
import GpuPage from '../Gpu/GpuPage';
import MonitorPage from '../Monitor/MonitorPage';
import MotherboardPage from '../Motherboard/MotherboardPage';
import MousePage from '../Mouse/MousePage';
import NotebookPage from '../Notebook/NotebookPage';
import PaqueteOfficePage from '../PaqueteOffice/PaqueteOfficePage';
import PcEscritorioPage from '../PcEscritorio/PcEscritorioPage';
import PlacaWifiPage from '../Placawifi/PlacaWifiPage';
import RamPage from '../Ram/RamPage';
import SistemaOperativoPage from '../Sistemaoperativo/SistemaOperativoPage';
import TecladoPage from '../Teclado/TecladoPage';



export default function AdminFormularios() {
    const {nombre} = useParams(); 

    // ARRAY ASCIATIVO PARA RENDERIZAR CADA FORMULARIO DEL PRODUCTO EN PARTICULAR
    const componentes ={
        "cooler":CoolerPage,
        "cpu":CpuPage,
        "disco":DiscoPage,
        "fuente":FuentePage,
        "gabinete":GabinetePage,
        "gpu":GpuPage,
        "monitor":MonitorPage,
        "motherboard":MotherboardPage,
        "mouse":MousePage,
        "notebook":NotebookPage,
        "paquete_office":PaqueteOfficePage,
        "pc escritorio":PcEscritorioPage,
        "placa_wifi":PlacaWifiPage,
        "ram":RamPage,
        "sistema_operativo":SistemaOperativoPage,
        "teclado":TecladoPage
    };

    // BUSCA EL COMPONENTE EN PARTICULAR 
    const ComponenteSeleccionado = componentes[nombre];
    console.log('NOMBRE=>',nombre);
    console.log('COPONENTES SELECCIONADO =>',ComponenteSeleccionado);
    
  return<ComponenteSeleccionado/>
}
