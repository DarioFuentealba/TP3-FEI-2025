import CrudManager from "../../Forms/CrudManager";

export default function GpuPage() {
  return (
    <CrudManager
      resource="gpus"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {name:"consumo", label:"Consumo (watts)",type:"number"},
        {name:"memoria_capacidad_gb", label:"Memoria (Gb)",type:"number"},
        {name:"memoria_tipo", label:"Tipo Memoria",type:"text"},
        {name:"memoria_velocidad", label:"Velocidad (Gb/s)",type:"text"},
        {name:"resolucion", label:"Resolucion",type:"text"},
        {name:"refrigeracion", label:"Refrigeracion",type:"text"},
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
