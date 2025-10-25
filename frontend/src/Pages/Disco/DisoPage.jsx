import CrudManager from "../../Forms/CrudManager";

export default function DiscoPage() {
  return (
    <CrudManager
      resource="discos"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"capacidad_gb",label:"Capacidad (GB)",type:"number"},
        {name:"consumo",label:"Consumo (watts)",type:"number"},
        {name:"velocidad",label:"Velocidad (MB/s)",type:"text"},
        {name:"conexion", label:"Conexion" , type:"text"},
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
