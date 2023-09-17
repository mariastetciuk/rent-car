import CarCard from 'components/CarCard/CarCard';
import scss from './CarsList.module.scss';

const CarsList = ({ handleBtnLoadMore, gallary }) => {
  return (
    <section>
      <ul className={scss.catalog__list}>
        {gallary &&
          gallary.map(card => <CarCard cardCar={card} key={card.id} />)}
      </ul>
      {gallary.length <= 31 && (
        <button
          type="button"
          className={scss.catalog__btn}
          onClick={handleBtnLoadMore}
        >
          Load more
        </button>
      )}
    </section>
  );
};

export default CarsList;
