import CrudManager from "../../Forms/CrudManager";

export default function PcEscritorioPage() {
  return (
     <CrudManager
          resource="notebooks"
          fields={[
            { name: "nombre", label: "Nombre", type: "text" },
            { name: "precio", label: "Precio", type: "number" },
            { name: "stock", label: "Stock", type: "number" },
            { name: "fabricante", label: "Fabricante", type: "text" },
            { name: "oferta", label: "Oferta", type: "checkbox" },
            {name:"tipo",label:"Tipo",type:"text"},
            {name:"envio_gratis",label:"Envio Gratis?",type:"checkbox"},
            {name:"gamer",label:"Gamer?",type:"checkbox"},
            {name:"teclado_extra",label:"Teclado Extra?",type:"checkbox"},
            {name:"usos",label:"Uso",type:"text"},
            {name:"almacenamiento",label:"Almacenamiento y Tipo",type:"text"},
            {name:"pantalla_tamanio",label:"Tamaño Pantalla",type:"text"},
            {name:"pantalla_tactil",label:"Pantalla Tactil ? ",type:"checkbox"},
            {name:"pantalla_led",label:"Pantalla LED ?",type:"checkbox"},
            {name:"memoria_ram",label:"Memoria Ram (Gb)",type:"number"},
            {name:"gpu_dedicada",label:"GPU_dedicada",type:"checkbox"},
            {name:"procesador",label:"Procesador",type:"text"},
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
