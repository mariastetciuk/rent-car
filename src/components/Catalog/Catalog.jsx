import CarsList from "components/CarsList/CarsList";
import Fillter from "components/Fillter/Filter";
import scss from './Catalog.module.scss';


const Catalog = ()=> {
   
    return <section className={scss.catalog}>
        <Fillter/>
        <CarsList />
    </section>
}

export default Catalog