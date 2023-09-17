export function getFavorites() {
    const favorites =localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];
    return favorites;
  }

 export const toggleFavorite = (isFaforite, favorite)=>{
    const localeStorageData = getFavorites();
    if(isFaforite && localeStorageData) {
      const updateFavorite = localeStorageData.filter(({id})=> id !== favorite.id);
    return updateFavorite;
    } if(localeStorageData){
      return [...localeStorageData, favorite];
    } else {
      return [favorite]; 
    }
  }
  
