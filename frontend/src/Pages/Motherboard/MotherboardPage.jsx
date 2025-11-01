import CrudManager from "../../Forms/CrudManager";

export default function MotherboardPage() {
  return (
    <CrudManager
      resource="motherboards"
      fields={[
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "stock", label: "Stock", type: "number" },
        { name: "fabricante", label: "Fabricante", type: "text" },
        { name: "oferta", label: "Oferta", type: "checkbox" },
        {
          name: "subcategoria",
          label: "Subcategoría",
          type: "select",
          optionsResource: "sub_categorias", // <- Se cargan automáticamente desde la API
        },
        { name: "foto", label: "Foto", type: "file",accept:"image/*" },
        { name: "memoria", label: "Memoria", type: "text" },
        { name: "socket", label: "Socket", type: "text" },
        { name: "puerto_sata", label: "Puerto_Sata", type: "text" },
        { name: "ranura_ram", label: "Ranura_Ram", type: "text" },
        { name: "pci", label: "Pci", type: "text" },
        { name: "usb", label: "Usb", type: "text" },
        { name: "hdmi", label: "Hdmi", type: "text" },
        { name: "vga", label: "Vga", type: "text" },
        { name: "consumo", label: "Consumo", type: "number" },
      ]}
    />
  );
}
