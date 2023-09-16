import Container from "components/Shared/Container";
import scss from './Home.module.scss';
import { Link } from "react-router-dom";
import { BiSolidCar, BiHappy, BiHeart } from "react-icons/bi";

const HomePage = () => {
  return (<>
    <section className={scss.hero}>
      <Container>
      <h1 className={scss.hero__title}>Car Rentals: Search, <span className={scss.hero__titleSpan}>Compare & Save</span> </h1>
      <Link to="/catalog" className={scss.hero__btn}>
      Choose a car</Link>
      </Container>
    </section>
     <section className={scss.benefits}>
     <Container className={scss.benefits__container}>
          <h2 className={scss.benefits__title}>Our benefits</h2>
          <ul className={scss.benefits__list}>
            <li className={scss.benefits__item}>
              <div className={scss.benefits__icon}><BiSolidCar size='60px'/></div>
            
              <h3 className={scss.benefits__name}> Variety of cars</h3>
              <p className={scss.benefits__text}>The available range of cars makes it possible to provide a significant number of customers and find a car that meets the wishes of the customer.</p>
            </li>
            <li className={scss.benefits__item}>
            <div className={scss.benefits__icon}><BiHappy size='60px'/></div>
              <h3 className={scss.benefits__name}>Affordable prices</h3>
              <p className={scss.benefits__text}>Best prices and no hidden fees. When booking a car with us, you do not you will come across a red tape, queue behind desired car. ignoring or double payments.</p>
            </li>
            <li className={scss.benefits__item}>
            <div className={scss.benefits__icon}><BiHeart size='60px'/></div>
              <h3 className={scss.benefits__name}>Support</h3>
              <p className={scss.benefits__text}>We employ the best specialists in their field who will be happy to help you in any situation.</p>
            </li>
           
          </ul>
       
     </Container>
   </section>
   </>
  );
};

export default HomePage;
