import { CiHeart } from 'react-icons/ci';
import scss from './CarCard.module.scss';
import { useState, useContext } from 'react';
import Modal from 'components/Modal/Modal';
import { AiFillHeart } from 'react-icons/ai';
import { toggleFavorite } from 'utilities/favoriteGallery';
import { ToggleContext } from 'components/SharedLayout/SharedLayout';

const CarCard = ({ cardCar }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    id,
    functionalities,
    address,
  } = cardCar;

  const [isShowModal, setIsShowModal] = useState(false);
  const [isFaforites, setIsFavorite] = useState(
    localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite')).some(
          item => item.id === id
        )
      : false
  );
  const { togleValueFn } = useContext(ToggleContext);

  const handleClickBtn = () => {
    setIsFavorite(prev => !prev);
    togleValueFn();
    localStorage.setItem(
      'favorite',
      JSON.stringify(toggleFavorite(isFaforites, cardCar))
    );
  };
  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <li className={scss.item}>
      <img className={scss.card__img} src={img} alt="Car" />
      <button className={scss.card__btn} onClick={handleClickBtn} type="button">
        {' '}
        {isFaforites ? (
          <AiFillHeart size={'18'} color="#3470FF" />
        ) : (
          <CiHeart size={'18'} color="white" />
        )}
      </button>
      <div className={scss.card__wrapper}>
        <p className={scss.card__description}>
          {make} <span className={scss.card__model}>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <ul className={scss.card__list}>
        <li className={scss.card__item}>{address.split(',')[1]}</li>
        <li className={scss.card__item}>{address.split(',')[2]}</li>
        <li className={scss.card__item}>{rentalCompany}</li>
        <li className={scss.card__item}>Previum</li>
        <li className={scss.card__item}>{type}</li>
        <li className={scss.card__item}>{model}</li>
        <li className={scss.card__item}>{id}</li>
        <li className={scss.card__item}>
          {functionalities[0].substring(0, 20)}
        </li>
      </ul>
      <button
        className={scss.card__learnMore}
        onClick={toggleModal}
        type="button"
      >
        Learn more
      </button>
      {isShowModal && (
        <Modal
          closeModal={toggleModal}
          setIsShowModal={setIsShowModal}
          cardCar={cardCar}
        />
      )}
    </li>
  );
};

export default CarCard;
