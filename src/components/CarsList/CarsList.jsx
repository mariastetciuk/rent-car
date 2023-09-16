import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from "react";
import {getGallery} from "API/fetch";
import scss from "./CarsList.module.scss";
import { getFavorites } from 'utilities/favoriteGallery';

const CarsList = () => {
  const [gallary, setGallary] = useState([]);
  const [favorite, setFavorite] = useState(getFavorites);
  const [page, setPage] = useState(1);
  // const[isShowLoadMore, setisShowLoadMore] = useState(true);
  useEffect(()=>{
    async function featch() {
        try {
          const {data}  = await getGallery(page);
          setGallary(data)
          console.log(favorite)
        } catch (error) {
          console.log(error);
        }
      };
      featch();
     }, [page]);

     const handleBtnLoadMore = () => {
      setPage(prev => prev + 1);

      async function featch() {
        try {
          const {data}  = await getGallery(page);
          setGallary(prev => [...prev, ...data])
        } catch (error) {
          console.log(error);
        }
      }

      featch(page);
      
    }

  return (
    <section>
    <ul className={scss.catalog__list}>
      {gallary && gallary.map((card) => <CarCard cardCar={card} key={card.id}/>)} 
    </ul>
    <button type='button' className={scss.catalog__btn} onClick={handleBtnLoadMore}>Load more</button>
    </section>
  );
};

export default CarsList;
