import Select from "react-select";
import scss from './Fillter.module.scss'
import { useForm, Controller } from "react-hook-form"
// import { useEffect, useState } from "react";
// import fetch from "helpers/fetch";

const options = [
    {value: 'red', label: 'Red'},
    {value: 'green', label: 'Green'},
    {value: 'black', label: 'Black'}
];
const options1 = [
    {value: '120', label: '120'},
    {value: '150', label: '150'},
    {value: '200', label: '200'}
]

const getValue= value => value?options.find((option)=> option.value === value) : '';

const Fillter = () => {
    // const[gallary, setGallary] = useState([]);
    // const [page, setPage] = useState(1)
    const {
        register,
        handleSubmit,
        control,
        // formState: {errors}, reset
    } = useForm({mode: 'onChange'});

//    useEffect(()=>{
//     async function featch() {
//         try {
//           const {data}  = await fetch(page);
//           setGallary(data)
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       featch();
//      }, [page])
   

    const onSubmitForm = data => {
       
    }
    return <section>
        <form onSubmit={handleSubmit(onSubmitForm)} className={scss.form} >
            <Controller 
            control={control}
            name="car brand"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label htmlFor="">
            Car brand
            <Select 
            value={getValue(value)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="select" 
            placeholder='Enter the text'
             options={options} />
            </label>)}
            />
             <Controller 
            control={control}
            name="prise"
            render={({field:{onChange, value}, fieldState: {error}})=>(<label htmlFor="">
            Price/ 1 hour
            <Select 
            options={options1}
            value={getValue(value)} 
            onChange={({value})=>onChange(value)} 
            classNamePrefix="select" 
            placeholder='To' />
            </label>)}
            />
            <label htmlFor="">
            Car mileage / km
            <br />
            <input {...register('from')} className={scss.input} type="text"  placeholder="From"/>
            <input {...register('to')} className={scss.input} type="text" placeholder="To" />
            </label>
            <button type="submit">Search</button>

        </form>
    </section>;
  };
  
  export default Fillter;
  