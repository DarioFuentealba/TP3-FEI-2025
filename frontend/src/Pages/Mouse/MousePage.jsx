import CrudManager from "../../Forms/CrudManager";

export default function MousePage() {
  return (
    <CrudManager
      resource="mouses"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"color" , label:"Color" , type:"text"},
        {name:"conexion" , label:"Conexion" , type:"text"},
        {name:"botones" , label:"Botones" , type:"text"},
        {name:"iluminacion" , label:"Iluminacion" , type:"checkbox"},
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
