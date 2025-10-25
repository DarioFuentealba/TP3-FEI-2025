import CrudManager from "../../Forms/CrudManager";

export default function CoolerPage() {
  return (
    <CrudManager
      resource="coolers"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"consumo" , label:"Consumo" , type:"number"},
        {name:"cooler_incluidos" , label:"Cooler Incluidos" ,type:"number"},
        {name:"iluminacion", label:"Iluminacion", type:"text"},
        {name:"color", label:"Color", type:"text"},
        {
          name: "subcategoria_id",
          label: "Subcategoría",
          type: "select",
          optionsResource: "subcategorias", // <- Se cargan automáticamente desde la API
        },
        { name: "foto", label: "Foto", type: "file" },
      ]}
    />
  );
}
