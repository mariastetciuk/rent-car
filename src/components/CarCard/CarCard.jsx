import { CiHeart } from "react-icons/ci";
import scss from './CarCard.module.scss';
import { useState } from 'react';
import Modal from "components/Modal/Modal";
import { AiFillHeart } from "react-icons/ai";
// import { getFavorites, addFavorite, deleteFromFavorite } from "utilities/favoriteGallery";

// const toggleFavorite = (isFaforite, favorite, gallary)=>{
//   const localeStorageData = JSON.parse(localStorage.getItem('favorite'));
//   if(isFaforite && localeStorageData) {
//     const updateFavorite = localeStorageData.filter(({id})=> id !== favorite.id);
//   return updateFavorite;
//   } if(localeStorageData){
//     return [...localeStorageData, favorite];
//   } else {
//     return [favorite];
//   }
// }
const CarCard = ({cardCar, gallary}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isFaforite, setIsFavorite] = useState( false);
  

 const {img, make, model, year, rentalPrice, rentalCompany, type, id, functionalities, address} = cardCar;


 const handleClickBtn = () => {
  // localStorage.removeItem("favorite");
 
  setIsFavorite(prev => !prev); 
// localStorage.setItem('favorite', JSON.stringify(toggleFavorite(isFaforite, cardCar)));

 }
  const toggleModal = () => setIsShowModal(prev => !prev);
 
  
  return <li className={scss.item} >
  <img className={scss.card__img} src={img} alt="Car" />
  <button className={scss.card__btn} onClick={handleClickBtn} type="button"> {isFaforite ? <AiFillHeart size={'18'} color="#3470FF"/> : <CiHeart size={'18'} color="white"/>}</button>
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
<li className={scss.card__item}>{functionalities[0].substring(0, 20)}</li>
  </ul>
  <button className={scss.card__learnMore} onClick={toggleModal} type='button'>Learn more</button>
  {isShowModal && <Modal closeModal={toggleModal} setIsShowModal={setIsShowModal} cardCar={cardCar}/>}
  </li>
};

export default CarCard;
