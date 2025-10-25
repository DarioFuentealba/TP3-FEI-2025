import CrudManager from "../../Forms/CrudManager";

export default function FuentePage() {
  return (
    <CrudManager
      resource="fuentes"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"consumo", label:"Consumo (watts)" ,type:"number"},
        {name:"eficiencia", label:"Eficiencia" ,type:"text"},
        {name:"ventilador", label:"Ventilador" ,type:"text"},
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
