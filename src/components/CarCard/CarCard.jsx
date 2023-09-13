import { CiHeart } from "react-icons/ci";
import scss from './CarCard.module.scss';

const CarCard = ({cardCar: {img, make, model, year, rentalPrice, rentalCompany, type, id, accessories, address}}) => {
  
  return <>
  <img className={scss.card__img} src={img} alt="Car" />
  <button className={scss.card__btn} type="button"> <CiHeart size={'18'} className={scss.card__icon}/></button>
  <div className={scss.card__wrapper}>
    <p className={scss.card__description}>{make}  <span className={scss.card__span}>{model}</span>, {year}</p>
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
<li className={scss.card__item}>{accessories[0]}</li>

  </ul>
  </>;
};

export default CarCard;
