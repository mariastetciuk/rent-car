import { CiHeart } from "react-icons/ci";
import scss from './CarCard.module.scss';
import { useState } from 'react';
import Modal from "components/Modal/Modal";


const CarCard = ({cardCar}) => {
  const [isShowModal, setIsShowModal] = useState(false);

 const {img, make, model, year, rentalPrice, rentalCompany, type, id, accessories, address} = cardCar;
  const toggleModal = () => setIsShowModal(prev => !prev);
  console.log(isShowModal);
  return <li className={scss.item} >
  <img className={scss.card__img} src={img} alt="Car" />
  <button className={scss.card__btn} type="button"> <CiHeart size={'18'} className={scss.card__icon}/></button>
  <div className={scss.card__wrapper}>
    <p className={scss.card__description}>{make}  <span className={scss.card__model}>{model}</span>, {year}</p>
    <p>{rentalPrice}</p>
  </div>
  <ul className={scss.card__list}>
<li className={scss.card__item}>{address.split(",")[1]}</li>
<li className={scss.card__item}>{address.split(",")[2]}</li>
<li className={scss.card__item}>{rentalCompany}</li>
<li className={scss.card__item}>Previum</li>
<li className={scss.card__item}>{type}</li>
<li className={scss.card__item}>{model}</li>
<li className={scss.card__item}>{id}</li>
<li className={scss.card__item}>{accessories[0].substring(0, 25)}</li>
  </ul>
  <button className={scss.card__learnMore} onClick={toggleModal} type='button'>Learn more</button>
  {isShowModal && <Modal closeModal={toggleModal} setIsShowModal={setIsShowModal} cardCar={cardCar}/>}
  </li>
};

export default CarCard;
