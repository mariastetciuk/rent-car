import { useEffect } from 'react';
import scss from './Modal.module.scss';
import { FiX } from 'react-icons/fi';
import { splitStringIntoNumberAndText } from 'utilities/splitStringIntoNumberAndText';

const Modal = ({ closeModal, cardCar }) => {
    const {img, make, model, year, rentalPrice, id, type, accessories, functionalities, address, engineSize, fuelConsumption, rentalConditions, mileage, description } = cardCar;
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
      <img src={img}
          alt={`${make} ${model} ${year}`} width='200px'/>
 <div className={scss.title__wraper}>
              <h2>
                  <span>{make} </span>
                  <span className={scss.title__accent}>{model}, </span>
                  <span>{year}</span>
              </h2>
              <ul className={scss.tags__list}>
                  <li className={scss.tags__item}>{address.split(',')[1]}</li>
                  <li className={scss.tags__item}>{address.split(',')[2]}</li>
                  <li className={scss.tags__item}>Id: {id}</li>
                  <li className={scss.tags__item}>Year: {year}</li>
                  <li className={scss.tags__item}>Type: {type}</li>
                  <li className={scss.tags__item}>Fuel Consumption: {fuelConsumption}</li>
                  <li className={scss.tags__item}>Engine Size: {engineSize}</li>
              </ul>
              </div>
              <p className={scss.description}>{description}</p>

<div className={scss.block__wrapper}>
<h3 className={scss.block__title}>Accessories and functionalities:</h3>
<ul className={scss.tags__list}>
  {[...accessories, ...functionalities].map(item => (
      <li className={scss.tags__item} key={item}>{item}</li>
  ))}
</ul>
</div>
<div className={scss.block__wrapper}>
              <h3 className={scss.block__title}>Rental Conditions:</h3>

              <ul className={scss.RentalConditionsList}>
              {rentalConditions
  .split('\n')
  .map(item => splitStringIntoNumberAndText(item)).map(item => {
                      if (typeof item === 'object') {
                          return (
                              <li className={scss.RentalConditionsItem } key={item}>
                                  {item.text}{' '}
                                  <span className={scss.AccentText}>{item.number}</span>
                              </li>
                          );
                      } else {
                          return (
                              <li className={scss.RentalConditionsItem } key={item}>
                                  {item}
                              </li>
                          );
                      }
                  })}
                 
                   <li className={scss.RentalConditionsItem }>
                      Mileage:{' '}
                      <span className={scss.AccentText}>
                          {mileage.toLocaleString('en-US')}
                      </span>
                  </li>

                  <li className={scss.RentalConditionsItem }>
                      Price: <span className={scss.AccentText}>{rentalPrice}</span>
                  </li>
              </ul>
          </div>
          <a className={scss.tel} href="tel:+380730000000"
                    tag="a"
                    btnWidth="auto"
                    btnPadding="12px 50px"
                >
                    Rental car</a>
          <button className={scss.modal__btn} onClick={closeModal}><FiX size="24"  /></button>
      </div>
    </div>
  );
};

export default Modal;