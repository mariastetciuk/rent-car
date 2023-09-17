import Select from "react-select";
import scss from './Fillter.module.scss'
import makes from 'data/makes.json';
import { useForm, Controller } from "react-hook-form"


const optionPrices = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
    { value: 50, label: 50 },
    { value: 60, label: 60 },
    { value: 70, label: 70 },
    { value: 80, label: 80 },
    { value: 90, label: 90 },
    { value: 100, label: 100 },
  ];

  const optionBrands = makes.map(make => ({ value: make, label: make }));

const getValue= (value, options) => value?options.find((option)=> option.value === value) : '';

const Fillter = () => {
  
    const {
        register,
        handleSubmit,
        control,
       
    } = useForm({mode: 'onChange'});

    const onSubmitForm = data => {
       
    }
    return <section>
        <form onSubmit={handleSubmit(onSubmitForm)} className={scss.form} >
            <Controller 
            control={control}
            name="car brand"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label className={scss.select__label} htmlFor="">
            Car brand
            <Select 
            value={getValue(value, optionBrands)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="select" 
            placeholder='Enter the text'
             options={optionBrands} />
            </label>)}
            />
             <Controller 
            control={control}
            name="prise"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label htmlFor="">
            Price/ 1 hour
            <Select 
            options={optionPrices}
            value={getValue(value, optionPrices)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="select" 
            placeholder='To' />
            </label>)}
            />
            <label htmlFor="">
            Car mileage / km
            <br />
            <input {...register('from')} className={scss.input} type="number"  placeholder="From"/>
            <input {...register('to')} className={scss.input} type="number" placeholder="To" />
            </label>
            <button type="submit">Search</button>

        </form>
    </section>;
  };
  
  export default Fillter;
  