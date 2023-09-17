import CarCard from 'components/CarCard/CarCard';
import scss from "./CarsList.module.scss";
import { ToggleContext } from 'components/SharedLayout/SharedLayout';
import { useContext } from 'react';


const CarsList = ({handleBtnLoadMore, gallary }) => {
  const {isShowMore} = useContext(ToggleContext);
  
  return (
    <section>
    <ul className={scss.catalog__list}>
      {gallary && gallary.map((card) => <CarCard cardCar={card} key={card.id} />)} 
    </ul>
    <button type='button' className={scss.catalog__btn} onClick={handleBtnLoadMore}>Load more</button>
    {/* {isShowMore &&  <button type='button' className={scss.catalog__btn} onClick={handleBtnLoadMore}>Load more</button>} */}
 
    </section>
  );
};

export default CarsList;
