import CrudManager from "../../Forms/CrudManager";

export default function MonitorPage() {
  return (
    <CrudManager
      resource="monitors"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"panel", label:"Panel" ,type:"text"},
        {name:"tamanio", label:"Tamaño" ,type:"text"},
        {name:"pantalla", label:"Pantalla" ,type:"text"},
        {name:"vga", label:"Vga" ,type:"checkbox"},
        {name:"display_port", label:"Display Port" ,type:"checkbox"},
        {name:"usb", label:"USB" ,type:"checkbox"},
        {name:"hdmi", label:"HDMI" ,type:"checkbox"},
        {name:"resolucion", label:"Resolucion" ,type:"text"},
        {name:"consumo", label:"Consumo (watts)" ,type:"number"},
        {
          name: "subcategoria",
          label: "Subcategoría",
          type: "select",
          optionsResource: "sub_categorias", // <- Se cargan automáticamente desde la API
        },
        { name: "foto", label: "Foto", type: "file",accept:"image/*" },
      ]}
    />
  );
}
