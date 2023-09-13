import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from "react";
import fetch from "helpers/fetch";
import scss from "./CarsList.module.scss";

const CarsList = () => {
  const[gallary, setGallary] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    async function featch() {
        try {
          const {data}  = await fetch(page);
          setGallary(data)
        } catch (error) {
          console.log(error);
        }
      };
      featch();
     }, [page]);
     console.log(setPage)
  return (
    <section>
    <ul className={scss.list}>
      {gallary && gallary.map((card) => <li className={scss.item} key={card.id}><CarCard cardCar={card}/></li>)}
      
    </ul>
    </section>
  );
};

export default CarsList;
