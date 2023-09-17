import Select from 'react-select';
import scss from './Fillter.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { getGallerys } from 'API/fetch';
import { optionPrices } from 'data/options';
import { optionBrands, getValue } from 'utilities/oprions';

const Fillter = ({ handleFillter }) => {
  const { register, handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: { from: '', to: '' },
  });
  const onSubmitForm = data => {
    async function featch() {
      try {
        const result = await getGallerys();
        console.log('result all ', result.data);
        const make = result.data
          .filter(({ make }) => (make ? data.make === make : data.make))
          .filter(({ rentalPrice }) => {
            if (!data.price) {
              return rentalPrice;
            }
            data.price = `$${data.price}`;
            return rentalPrice === data.price;
          })
          .filter(({ mileage }) => mileage > data.from)
          .filter(({ mileage }) => (mileage ? data.to < mileage : data.to));

        handleFillter(make);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmitForm)} className={scss.form}>
        <div className="filter-brand">
          <Controller
            control={control}
            name="make"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <label className={scss.label} htmlFor="">
                Car brand
                <Select
                  value={getValue(value, optionBrands)}
                  onChange={({ value }) => onChange(value)}
                  classNamePrefix="filter-select"
                  placeholder="Enter the text"
                  options={optionBrands}
                />
              </label>
            )}
          />
        </div>
        <div className="filter-price">
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <label className={scss.label} htmlFor="">
                Price/ 1 hour
                <Select
                  className={scss.select}
                  options={optionPrices}
                  value={getValue(value, optionPrices)}
                  onChange={({ value }) => onChange(value)}
                  classNamePrefix="filter-select"
                  placeholder=""
                />
                <span className={scss.span}>To $</span>
              </label>
            )}
          />
        </div>
        <label className={scss.label} htmlFor="">
          Car mileage / km
          <br />
          <div className={scss.input__wrapper}>
            <input
              {...register('from')}
              className={scss.input1}
              name="from"
              type="number"
            />
            <span className={scss.span__input1}>From</span>
            <input
              {...register('to')}
              className={scss.input2}
              name="to"
              type="number"
              placeholder=""
            />
            <span className={scss.span__input2}>To</span>
          </div>
        </label>
        <button className={scss.btn} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default Fillter;
