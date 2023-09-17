import Select from "react-select";
import scss from './Fillter.module.scss'
import makes from 'data/makes.json';
import { useForm, Controller } from "react-hook-form";
import { getGallerys } from "API/fetch";


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
 

    const {
        register,
        handleSubmit,
        control,
       
    } = useForm({mode: 'onChange', defaultValues: { from: '', to: '' }});

   

    const onSubmitForm = (data) => {
        console.log('before', gallary)
        console.log(data)
       async function featch() {
        try {
                const result = await getGallerys();
                console.log('result all ', result.data);

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
            <Controller 
            control={control}
            name="make"
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
            name="price"
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
            <input {...register('from')} className={scss.input} name='from' type="number"  placeholder="From"/>
            <input {...register('to')} className={scss.input} name='to' type="number" placeholder="To" />
            </label>
            <button type="submit">Search</button>

        </form>
    </section>;
  };
  
  export default Fillter;
  