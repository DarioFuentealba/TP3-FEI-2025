//Categorias
import ofertasImg from "../assets/Imagenes/Tarjetas/ofertas.jpg";
import computadorasImg from "../assets/Imagenes/Tarjetas/computadoras.jpeg";
import usoImg from "../assets/Imagenes/Tarjetas/uso.jpg";
import hardwareImg from "../assets/Imagenes/Tarjetas/hardware.webp";
import perifericosImg from "../assets/Imagenes/Tarjetas/perifericos.jpg";
import softwareImg from "../assets/Imagenes/Tarjetas/so2.png";
//subcategorias - Computadoras
import pcImg from "../assets/Imagenes/Tarjetas/pc.webp";
import notebookImg from "../assets/Imagenes/Tarjetas/notebook.webp";
//subcategorias - Hardware
import microImg from "../assets/Imagenes/Tarjetas/micro.jpg";
import motherImg from "../assets/Imagenes/Tarjetas/mother.jpg";
import coolerImg from "../assets/Imagenes/Tarjetas/cooler.jpg";
import ramImg from "../assets/Imagenes/Tarjetas/ram.jpg";
import discoImg from "../assets/Imagenes/Tarjetas/disco.jpg";
import placaVideoImg from "../assets/Imagenes/Tarjetas/placaVideo.jpg";
import placaWifiImg from "../assets/Imagenes/Tarjetas/placaWifi.jpg";
import gabineteImg from "../assets/Imagenes/Tarjetas/gabinete.jpg";
import fuenteImg from "../assets/Imagenes/Tarjetas/fuente.jpg";
//subcategorias - Perifericos
import monitorImg from "../assets/Imagenes/Tarjetas/monitor.jpg";
import mouseImg from "../assets/Imagenes/Tarjetas/mouse.jpg";
import tecladoImg from "../assets/Imagenes/Tarjetas/teclado.jpg";
//subcategorias - Software
import soImg from "../assets/Imagenes/Tarjetas/so.png";
import officeImg from "../assets/Imagenes/Tarjetas/office.png";
//subcategorias - Usos
import gamerImg from "../assets/Imagenes/Tarjetas/gamer2.jpg";
import hoImg from "../assets/Imagenes/Tarjetas/ho2.jpg";
import disenioImg from "../assets/Imagenes/Tarjetas/disenio.jpg";

import { useApi } from "../hooks/useApi";

// Computadoras - Hardware - Perifericos - Armar tu PC - Contacto - 
// - Software - Ofertas - Tu PC ideal - Usos
export function useCategorias() {
  const { data: cate, loading, error } = useApi('categoria-con-subcategorias');

  const imagenes = [
    { 
      Computadoras: computadorasImg, 
      subcategorias: [pcImg, notebookImg] 
    },
    { 
      Hardware: hardwareImg, 
      subcategorias: [
        motherImg,      // id: 3 - Motherboard
        microImg,       // id: 4 - Cpu
        placaVideoImg,  // id: 5 - Gpu
        ramImg,         // id: 6 - Ram
        coolerImg,      // id: 7 - Cooler
        discoImg,       // id: 8 - Disco
        fuenteImg,       // id: 9 - Fuente
        gabineteImg,    // id: 10 - Gabinete
        placaWifiImg   // id: 16 - placa_wifi
      ] 
    },
    { 
      Perifericos: perifericosImg, 
      subcategorias: [tecladoImg, monitorImg, mouseImg] 
    },
    { 
      Software: softwareImg, 
      subcategorias: [soImg, officeImg] 
    },
    { 
      Ofertas: ofertasImg 
    },
    { 
      Uso: usoImg, 
      subcategorias: [gamerImg, hoImg, disenioImg]
    }
  ];

  if (!cate) return { categorias: [], loading, error, mapeo: {}, mapeoNombres: {} };

  const categoriasFiltradas = cate.filter(
    cat => cat.nombre === 'Ofertas' || (cat.subcategorias && cat.subcategorias.length > 0)
  );

  const categoriasConImagenes = categoriasFiltradas.map(cat => {
    const imgObj = imagenes.find(
      img => Object.keys(img)[0].toLowerCase() === cat.nombre.toLowerCase()
    );

    return {
      ...cat,
      imagen: imgObj ? imgObj[Object.keys(imgObj)[0]] : null,
      subcategorias: cat.subcategorias.map((sub, index) => {
        if (!imgObj || !imgObj.subcategorias) return sub;
        return { 
          ...sub, 
          imagen: imgObj.subcategorias[index] || null 
        };
      })
    };
  });
  
  // Mapeo de categoría → IDs de subcategorías
  const mapeo = {};
  categoriasConImagenes.forEach(cat => {
    mapeo[cat.nombre] = cat.subcategorias.map(sub => sub.id);
  });

  // Mapeo de nombre de subcategoría → ID
  const mapeoNombres = {};
  categoriasConImagenes.forEach(cat => {
    cat.subcategorias.forEach(sub => {
      mapeoNombres[sub.nombre] = sub.id;
    });
  });

  //  console.log("📊 Mapeo por categoría:", mapeo);
  //  console.log("🏷️ Mapeo por nombre:", mapeoNombres);

  // Mapeo de ID → nombre de subcategoría
const mapeoPorId = {};
categoriasConImagenes.forEach(cat => {
  cat.subcategorias.forEach(sub => {
    mapeoPorId[sub.id] = sub.nombre;
  });
});

  return { 
    categorias: categoriasConImagenes, 
    loading, 
    error, 
    mapeo,
    mapeoNombres,
    mapeoPorId
  };
}




// const categorias = {
//   ofertas:{
//     name: "Ofertas", //name es lo que se muestra en el dropdown.
//     label: "Ofertas", //label es lo que va en la URL.
//     image: ofertasImg,
//   },
//   computadoras: {
//     name: "Computadoras", //name es lo que se muestra en el dropdown.
//     label: "Computadoras", //label es lo que va en la URL.
//     image: computadorasImg,
//     subcategorias: [
//       {
//         name: "PC de escritorio",
//         label: "PC de escritorio",
//         image: pcImg,
//       },
//       {
//         name: "Notebooks",
//         label: "Notebooks",
//         image: notebookImg,
//       },
//     ],
//   },
//   hardware: {
//     name: "Hardware",
//     label: "Hardware",
//     image: hardwareImg,
//     subcategorias: [
//       { 
//         name: "Microprocesador",
//         label: "Microprocesador",
//         image: microImg
//       },
//       { 
//         name: "Motherboard",
//         label: "Motherboard",
//         image: motherImg
//       },
//       { 
//         name: "Cooler",
//         label: "Cooler",
//         image: coolerImg
//       },
//       { 
//         name: "Ram",
//         label: "Ram",
//         image: ramImg
//       },
//       { 
//         name: "Disco",
//         label: "Disco",
//         image: discoImg
//       },
//       { 
//         name: "Placa_video",
//         label: "Placa_video",
//         image: placaVideoImg
//       },
//       { 
//         name: "Placa_wifi",
//         label: "Placa_wifi",
//         image: placaWifiImg
//       },
//       { 
//         name: "Fuente",
//         label: "Fuente",
//         image: gabineteImg
//       },
//       { 
//         name: "Gabinete",
//         label: "Gabinete",
//         image: fuenteImg
//       },
//     ],
//   },
//   perifericos: {
//     name: "Perifericos",
//     label: "Perifericos",
//     image: perifericosImg,
//     subcategorias: [
//       { 
//         name: "Monitor",
//         label: "Monitor",
//         image: monitorImg
//       },
//       { 
//         name: "Mouse",
//         label: "Mouse",
//         image: mouseImg
//       },
//       { 
//         name: "Teclado",
//         label: "Teclado",
//         image: tecladoImg
//       },
//     ],
//   },
//   software: {
//     name: "Software",
//     label: "Software",
//     image: softwareImg,
//     subcategorias: [
//       { 
//         name: "Sistema_Operativo",
//         label: "Sistema_Operativo",
//         image: soImg
//       },
//       { 
//         name: "Paquete_office",
//         label: "Paquete_office",
//         image: officeImg
//       },
//     ],
//   },
//   uso: {
//     name: "Uso",
//     label: "Usos",
//     image: usoImg,
//     subcategorias: [
//       { 
//         name: "Gamer",
//         label: "Gamer",
//         image: soImg
//       },
//       { 
//         name: "Hogar y oficina",
//         label: "Oficina",
//         image: officeImg
//       },
//       { 
//         name: "Diseño",
//         label: "Diseño",
//         image: officeImg
//       },
//     ],
//   },
// };

// export default categorias;



/*const categorias = {
  computadoras:
  {
    name: "Computadoras",
    label: "Computadoras",
    image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
  },
  hardware:
  {
    name: "Hardware",
    label: "Hardware",
    image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
  },
  perifericos:
  {
    name: "Periféricos",
    label: "Periféricos",
    image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
  },
  software:
  {
    name: "Software",
    label: "Software",
    image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
  }
};

export default categorias;*/

/*const categorias = {

  ofertas: [
    { 
      name: "PC de escritorio",
      label: "PC de escritorio",
      image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
    },
    { 
      name: "Notebook",
      label: "Notebook",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Todas las ofertas",
      label: "Todas las ofertas",
      image: "../Components/Icono/IconosHeader/IconoHardware/IconoHardware.jsx"
    },
  ],

  computadoras: [
    { 
      name: "PC de escritorio",
      label: "PC de escritorio",
      image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
    },
    { 
      name: "Notebook",
      label: "Notebook",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
  ],

  hardware: [
    { 
      name: "Placa madre",
      label: "Placa madre",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Cooler",
      label: "Cooler",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Memoría",
      label: "Memoría",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Disco",
      label: "Disco",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Placa de video",
      label: "Placa de video",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Fuente",
      label: "Fuente",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Gabinete",
      label: "Gabinete",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
  ],

  perifericos: [
    { 
      name: "Monitor",
      label: "Monitor",
      image: "../Components/Icono/IconosHeader/IconoPcEscritorio/IconoPcEscritorio.jsx"
    },
    { 
      name: "Mouse",
      label: "Mouse",
      image: "../Components/Icono/IconosHeader/IconoNotebook/IconoNotebook.jsx"
    },
    { 
      name: "Teclado",
      label: "Teclado",
      image: "../Components/Icono/IconosHeader/IconoHardware/IconoHardware.jsx"
    },
  ],
};

export default categorias;   */