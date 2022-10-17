import { CENTER_TOKYO, getCoordinates } from './map.js';
export { activateForm, disableForm };

const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;
const adForm = document.querySelector('.ad-form');
const adFormList = adForm.children;
const address = adForm.querySelector('#address');
const formType = adForm.querySelector('#type');
const formPrice = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const MIN_PRICE_OF_HOUSING = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const onTimeSelectChange = (element) => {
  return (evt) => {
    element.value = evt.target.value;
  };
};

const onTypeOfHousingSelectChange = () => {
  return (evt) => {
    switch (evt.target.value) {
      case 'bungalow':
        formPrice.placeholder = MIN_PRICE_OF_HOUSING.bungalow;
        formPrice.min = MIN_PRICE_OF_HOUSING.bungalow;
        break;
      case 'flat':
        formPrice.placeholder = MIN_PRICE_OF_HOUSING.flat;
        formPrice.min = MIN_PRICE_OF_HOUSING.flat;
        break;
      case 'hotel':
        formPrice.placeholder = MIN_PRICE_OF_HOUSING.hotel;
        formPrice.min = MIN_PRICE_OF_HOUSING.hotel;
        break;
      case 'house':
        formPrice.placeholder = MIN_PRICE_OF_HOUSING.house;
        formPrice.min = MIN_PRICE_OF_HOUSING.house;
        break;
      case 'palace':
        formPrice.placeholder = MIN_PRICE_OF_HOUSING.palace;
        formPrice.min = MIN_PRICE_OF_HOUSING.palace;
        break;
    }
  };
};

const addClass = (list, flag) => {
  for(const item of list) {
    item.disabled = flag;
  }
};

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  addClass(adFormList, true);
  mapFilters.classList.add('map__filters--disabled');
  addClass(mapFiltersList, true);
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  addClass(adFormList, false);
  mapFilters.classList.remove('map__filters--disabled');
  addClass(mapFiltersList, false);
  getCoordinates(CENTER_TOKYO);
  address.setAttribute('readonly', '');
};

formType.addEventListener('change', onTypeOfHousingSelectChange());
timeIn.addEventListener('change', onTimeSelectChange(timeOut));
timeOut.addEventListener('change', onTimeSelectChange(timeIn));


