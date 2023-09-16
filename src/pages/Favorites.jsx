
import { getFavorites } from 'utilities/favoriteGallery';
import scss from '../components/CarsList/CarsList.module.scss';
import Container from "components/Shared/Container";
import { useContext, useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { ToggleContext } from 'components/SharedLayout/SharedLayout';

const FavoritesPage = () => {
  const [favorite, setFavorite] = useState(getFavorites() || []);
  const {isFaforite} = useContext(ToggleContext);

  useEffect(()=>{
      setFavorite(getFavorites() || []);
  }, [isFaforite])


  return (
   <Container>
      <h2>FavoritesPage</h2>
      <ul className={scss.catalog__list}>
      {favorite.map((card) => <CarCard cardCar={card} key={card.id}/>)}
      </ul>
      </Container>
  );
};

export default FavoritesPage;
