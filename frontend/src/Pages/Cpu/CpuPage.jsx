import CrudManager from "../../Forms/CrudManager";

export default function CpuPage() {
  return (
    <CrudManager
      resource="cpus"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "modelo", label: "Modelo", type: "text" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "nucleos", label: "Núcleos", type: "number" },
        { name: "hilos", label: "Hilos", type: "number" },
        { name: "frecuencia", label: "Frecuencia (GHz)", type: "text" },
        { name: "proceso_fabricacion", label: "Proceso de Fabricación (nm)", type: "text" },
        { name: "grafica_integrada", label: "Gráfica Integrada", type: "checkbox" },
        { name: "socket", label: "Socket", type: "text" },
        { name: "incluye_cooler", label: "Incluye Cooler", type: "checkbox" },
        { name: "tdp_watts", label: "TDP (Watts)", type: "number" },
        { name: "memoria_l1", label: "Memoria L1 (KB)", type: "text" },
        { name: "memoria_l2", label: "Memoria L2 (MB)", type: "text" },
        { name: "memoria_l3", label: "Memoria L3 (MB)", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "oferta", label: "En Oferta", type: "checkbox" },
        {
          name: "subcategoria_id",
          label: "Subcategoría",
          type: "select",
          optionsResource: "sub_categorias",
        },
        { name: "foto", label: "Foto", type: "file",accept:"image/*" },
      ]}
    />
  );
}