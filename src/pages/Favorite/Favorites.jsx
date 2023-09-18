import { getFavorites } from 'utilities/favoriteGallery';
import Container from 'components/Shared/Container';
import { useContext, useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { ToggleContext } from 'components/SharedLayout/SharedLayout';
import scss from './Favorite.module.scss';

const FavoritesPage = () => {
  const [favorite, setFavorite] = useState(getFavorites() || []);
  const { isFaforite } = useContext(ToggleContext);

  useEffect(() => {
    setFavorite(getFavorites() || []);
  }, [isFaforite]);

  return (
    <section className={scss.favorite}>
      <Container>
        <ul className={scss.favorite__list}>
          {favorite.map(card => (
            <CarCard cardCar={card} key={card.id} />
          ))}
        </ul>
     
        {favorite.length === 0 && <div className={scss.wpapper}> <p className={scss.plescholder}>Your favorite cars list is empty</p>
           
           </div>
        }
      </Container>
    </section>
  );
};

export default FavoritesPage;
