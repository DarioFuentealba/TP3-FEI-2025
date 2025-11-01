import CrudManager from "../../Forms/CrudManager";

export default function SistemaOperativoPage() {
  return (
     <CrudManager
          resource="notebooks"
          fields={[
            { name: "nombre", label: "Nombre", type: "text" },
            { name: "precio", label: "Precio", type: "number" },
            { name: "stock", label: "Stock", type: "number" },
            { name: "fabricante", label: "Fabricante", type: "text" },
            { name: "oferta", label: "Oferta", type: "checkbox" },
            {name:"detalle",label:"Detalle",type:"text"},
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
