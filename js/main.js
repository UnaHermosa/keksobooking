import { createAdvertismentsArray } from './data.js';
import './popup.js';
import { onTimeSelectChange } from './form.js'

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

createAdvertismentsArray();

timeInSelect.addEventListener('change', onTimeSelectChange(timeInSelect, timeOutSelect));
timeOutSelect.addEventListener('change', onTimeSelectChange(timeOutSelect, timeInSelect));
