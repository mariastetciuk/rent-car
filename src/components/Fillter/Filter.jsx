import Select from "react-select";
import scss from './Fillter.module.scss'
import makes from 'data/makes.json';
import { useForm, Controller } from "react-hook-form";
import { getGallerys } from "API/fetch";
import { useContext } from "react";
import { ToggleContext } from "components/SharedLayout/SharedLayout";


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

const getValue= (value, options) => value?options.find((option)=> option.value === value) : 'null';

const Fillter = ({handleFillter, gallary}) => {
  const {isShowMore, toglleShowMore} = useContext(ToggleContext);

    const {
        register,
        handleSubmit,
        control,
       
    } = useForm({mode: 'onChange', defaultValues: { from: '', to: '' }});

   

    const onSubmitForm = (data) => {
       async function featch() {
        try {
                const result = await getGallerys();
                console.log('result all ', result.data);
                if(result.data.length > 7) toglleShowMore();

                const make = result.data.filter(({ make }) => (make ? data.make === make : data.make)).filter(({ rentalPrice }) => {
                    if (!data.price) {
                      return rentalPrice;}
                    data.price = `$${data.price}`;
                     return rentalPrice === data.price;
                   }).filter(({ mileage}) => mileage > data.from).filter(({ mileage }) => (mileage ? data.to < mileage : data.to));

                   handleFillter(make);
           
                } catch (error) {
                    console.log(error);
                  }
                  
          
              };
          featch();

    
}


    return <section>
        <form onSubmit={handleSubmit(onSubmitForm)} className={scss.form} >
        <div className="filter-brand">
            <Controller 
            control={control}
            name="make"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label className={scss.label} htmlFor="">
            Car brand
            <Select 
            value={getValue(value, optionBrands)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="filter-select" 
            placeholder='Enter the text'
             options={optionBrands} />
            </label>)}
            />
            </div>
            <div className="filter-price">
             <Controller 
            control={control}
            name="price"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label className={scss.label} htmlFor="">
            Price/ 1 hour
            <Select 
            className={scss.select}
            options={optionPrices}
            value={getValue(value, optionPrices)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="filter-select" 
            placeholder='' />
             <span className={scss.span}>To $</span>
            </label>)}
            />
            </div>
            <label className={scss.label} htmlFor="">
            Car mileage / km
            <br />
            <div className={scss.input__wrapper}>
            <input {...register('from')} className={scss.input1} name='from' type="number"  />
            <span className={scss.span__input1}>From</span>
            <input {...register('to')} className={scss.input2} name='to' type="number" placeholder="" />
            <span className={scss.span__input2}>To</span>
            </div>
            </label>
            <button className={scss.btn} type="submit">Search</button>

        </form>
    </section>;
  };
  
  export default Fillter;
  