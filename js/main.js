import { createAdvertismentsArray } from './data.js';
import './popup.js';
import { onTimeSelectChange, onTypeOfHousingSelectChange } from './form.js'

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const typeOfHousing = document.querySelector('[name = type]');
const priceInput = document.querySelector('#price');

createAdvertismentsArray();

timeInSelect.addEventListener('change', onTimeSelectChange(timeInSelect, timeOutSelect));
timeOutSelect.addEventListener('change', onTimeSelectChange(timeOutSelect, timeInSelect));
typeOfHousing.addEventListener('change', onTypeOfHousingSelectChange(typeOfHousing, priceInput));