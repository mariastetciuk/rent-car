import CarsList from 'components/CarsList/CarsList';
import Fillter from 'components/Fillter/Filter';
import scss from './Catalog.module.scss';
import { useEffect, useState, useContext } from 'react';
import { getGallery } from 'API/fetch';
import { ToggleContext } from 'components/SharedLayout/SharedLayout';

const Catalog = () => {
  const { page, addPage } = useContext(ToggleContext);
  const [gallary, setGallary] = useState([]);

  useEffect(() => {
    async function featch() {
      try {
        const { data } = await getGallery(1);
        setGallary(prev => [...data]);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, []);
  console.log(gallary);
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
      <CarsList
        handleBtnLoadMore={handleBtnLoadMore}
        gallary={gallary}
        handleFillter={handleFillter}
      />
    </section>
  );
};

export default Catalog;
