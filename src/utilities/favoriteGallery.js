export function getFavorites() {
    const favorites = localStorage.getItem("favorite");
    return favorites ? favorites : [];
  }
  
  export function addFavorite(id) {
    const favorite = getFavorites();
    favorite.push(id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }
  
  export function deleteFavorite(id) {
    const favorite = getFavorites();
    const updatedFavorite = favorite.filter((favorite) => favorite !== id);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
  }