const getFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  };
  
  export const esFavorito = (id) => {
    const favoritos = getFavoritos();
    return favoritos.some((item) => item.id === id);
  };
  
  export const toggleFavorito = (item) => {
    let favoritos = getFavoritos();
    const existe = favoritos.some((f) => f.id === item.id);
  
    if (existe) {
      favoritos = favoritos.filter((f) => f.id !== item.id);
    } else {
      favoritos.push(item);
    }
  
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    window.dispatchEvent(new Event("favoritosActualizados"));
    return !existe; 
  };
  
  export default getFavoritos;