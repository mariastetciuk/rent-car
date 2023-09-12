import Select from "react-select";
import scss from './Fillter.module.scss'

const Fillter = () => {

    const handleSubmitForm = evn => {
        evn.preventDefault();
    }
    return <section>
        <form className={scss.form} onSubmit={handleSubmitForm}>
            <label htmlFor="">
            Car brand
            <Select classNamePrefix="select"/>
            </label>
            <label htmlFor="">
            Price/ 1 hour
            <Select classNamePrefix="select"/>
            </label>
            <label htmlFor="">
            Car mileage / km
            <br />
            <input className={scss.input} type="text" placeholder="From"/>
            <input className={scss.input} type="text" placeholder="To" />
            </label>
            <button type="submit">Search</button>

        </form>
    </section>;
  };
  
  export default Fillter;
  