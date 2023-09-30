import CarsList from 'components/CarsList/CarsList';
import Fillter from 'components/Fillter/Filter';
import scss from './Catalog.module.scss';
import { useEffect, useState, useContext } from 'react';
import { getGallery } from 'API/fetch';
import { ToggleContext } from 'components/SharedLayout/SharedLayout';
import CircleLoader from "react-spinners/CircleLoader";


const Catalog = () => {
  const { page, addPage } = useContext(ToggleContext);
  const [gallary, setGallary] = useState([]);
  const [isSpinner, setIsSpinner] = useState(true);

  useEffect(() => {
    async function featch() {
      try {
        const { data } = await getGallery(1);
        setGallary(prev => [...data]);
        setIsSpinner(false);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, []);
  const handleFillter = fillter => setGallary(fillter);
  const handleBtnLoadMore = () => {
    addPage();

    async function featch() {
      try {
        const { data } = await getGallery(page);
        setGallary(prev => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      }
    }
    featch(page);
  };
  return (
    <section className={scss.catalog}>
      <Fillter handleFillter={handleFillter} gallary={gallary} />

{isSpinner && <CircleLoader  className={scss.spinner} size='150px' color='blue' aria-label="Loading Spinner"
    data-testid="loader" />}
      <CarsList
        handleBtnLoadMore={handleBtnLoadMore}
        gallary={gallary}
        handleFillter={handleFillter}
      />
    </section>
  );
};

export default Catalog;
