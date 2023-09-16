
import scss from '../components/CarsList/CarsList.module.scss';
import Container from "components/Shared/Container";


const FavoritesPage = () => {
 
  

  // useEffect(() => {
  //   const localeStorageData = JSON.parse(localStorage.getItem('favorite'));
  //   setFavorites(() => [...localeStorageData]);
  // }, []);

  return (
   <Container>
      <h2>FavoritesPage</h2>
      <ul className={scss.catalog__list}>
      {/* {favorites.map((card) => <CarCard cardCar={card} key={card.id}/>)} */}
      </ul>
      </Container>
  );
};

export default FavoritesPage;
