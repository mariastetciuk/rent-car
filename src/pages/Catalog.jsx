import CarsList from 'components/CarsList/CarsList';
import Fillter from 'components/Fillter/Filter';

const CatalogPage = () => {
  return (
    <section>
      <Fillter/>
      <CarsList />
    </section>
  );
};

export default CatalogPage;
