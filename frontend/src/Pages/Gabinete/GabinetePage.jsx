import CrudManager from "../../Forms/CrudManager";

export default function GabinetePage() {
  return (
    <CrudManager
      resource="gabinetes"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"ventana" ,label:"Ventana", type:"checkbox"},
        {name:"colores" ,label:"Color", type:"text"},
        {name:"usb" ,label:"USB", type:"text"},
        {name:"audio_hd" ,label:"Audio", type:"checkbox"},
        {name:"ancho" ,label:"Ancho (mm)", type:"number"},
        {name:"alto" ,label:"Alto (mm)", type:"number"},
        {name:"profundidad" ,label:"Profundidad (mm)", type:"number"},
        {name:"ventiladores" ,label:"Ventiladores", type:"number"},
        {name:"incluidos" ,label:"Incluidos (ventiladores)", type:"number"},
        {name:"radiadores" ,label:"Radiadores", type:"text"},
        {name:"consumo" ,label:"Consumo (watts)", type:"number"},
        {
          name: "subcategoria",
          label: "Subcategoría",
          type: "select",
          optionsResource: "subcategorias", // <- Se cargan automáticamente desde la API
        },
        { name: "foto", label: "Foto", type: "file" },
      ]}
    />
  );
}
