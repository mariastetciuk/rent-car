import makes from 'data/makes.json';

export const optionBrands = makes.map(make => ({ value: make, label: make }));

export const getValue= (value, options) => value?options.find((option)=> option.value === value) : 'null';
