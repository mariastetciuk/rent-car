import { useEffect } from 'react';
import scss from './Modal.module.scss';
import { FiX } from 'react-icons/fi';


const Modal = ({ closeModal, setIsShowModal, cardCar }) => {
    const {img, make, model, year, rentalPrice, rentalCompany, type, accessories, address, engineSize, fuelConsumption, rentalConditions, mileage, description } = cardCar;
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const handlePressESC = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handlePressESC);

    return () => {
      document.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  return (
    <div className={scss.overlay} onClick={handleOverlayClick}>
      <div className={scss.modal}>
        <div className={scss.wrapper}>
        <div className={scss.car}>
       <img className={scss.car__img} src={img} alt="" />
       <div className={scss.car__wrapper}>
    <p className={scss.car__description}>{make}  <span className={scss.car__model}>{model}</span>, {year}</p>
    <p>{rentalPrice}</p>
  </div>
      
       </div>
       <div className={scss.characteristick}>
       <p className={scss.characteristick__description}>{description}</p>
       <h3 className={scss.characteristick__title}>Characteristick</h3>
       <ul className={scss.characteristick__list}>
        <li className={scss.characteristick__item}>{`Type ${type}.`}</li>
        <li className={scss.characteristick__item}>{`Accessories: ${accessories.join(', ').toLowerCase()}.`}</li>
        <li className={scss.characteristick__item}>{`Engine size ${engineSize}.`}</li>
        <li className={scss.characteristick__item}>{`Fuel consumption ${fuelConsumption}.`}</li>
        <li className={scss.characteristick__item}>{`Mileage ${mileage}.`}</li>
       </ul>
       </div>
       </div>
<div className={scss.company}>
       <p className={scss.company__name}>Rental conditions: <span className={scss.company__description}>{rentalConditions}.</span></p>
       <p className={scss.company__name}>Rental company: <span className={scss.company__description}>{rentalCompany}.</span></p>
       <p className={scss.company__name}>Address: <span className={scss.company__description}>{address}.</span></p>
       </div>
       <button className={scss.modal__btn} onClick={closeModal}><FiX size="23" color='inherit' /></button>
      </div>
    </div>
  );
};

export default Modal;