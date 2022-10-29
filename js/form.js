import { CENTER_TOKYO, getCoordinates, mainMarker, map, ZOOM_MAP } from './map.js';
import { sendData } from './server.js';
import { showSuccessModal, showErrorModal } from './util.js';
import { addErrorStyle, addNormalStyle } from './form-validation.js';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;
const adForm = document.querySelector('.ad-form');
const adFormList = adForm.children;
const formTitle = adForm.querySelector('#title');
const address = adForm.querySelector('#address');
const formType = adForm.querySelector('#type');
const formPrice = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const capacity = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

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
  getCoordinates(CENTER_TOKYO);
  address.setAttribute('readonly', '');
};

formType.addEventListener('change', onTypeOfHousingSelectChange());
timeIn.addEventListener('change', onTimeSelectChange(timeOut));
timeOut.addEventListener('change', onTimeSelectChange(timeIn));

const clearForm = () => {
  formTitle.value = '';
  formType.value = 'flat';
  formPrice.value = '';
  formPrice.placeholder = MIN_PRICE_OF_HOUSING.flat;
  roomNumber.value = '1';
  capacity.value = '1';
  if(!formTitle.checkValidity()) {
    addNormalStyle(formTitle);
  }
  if(!formPrice.checkValidity()) {
    addNormalStyle(formPrice);
  }
}

const publishAdvertisement = () => {
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const formData = new FormData(adForm);
    
    if(!formTitle.checkValidity() && !formPrice.checkValidity()) {
      if(!formTitle.checkValidity()) {
        addErrorStyle(formTitle);
      } else {
        addNormalStyle(formTitle);
      }

      if(!formPrice.checkValidity()) {
        addErrorStyle(formPrice);
      } else {
        addNormalStyle(formPrice);
      }
    } else {
      sendData(() => {
        showSuccessModal();
        clearForm();
      },
      () => {
        showErrorModal()},
      formData,
      )
    }
  });
} 

const resetForm = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearForm();
    mainMarker.setLatLng(CENTER_TOKYO);
    map.setView(CENTER_TOKYO, ZOOM_MAP);
    getCoordinates(CENTER_TOKYO);
  })
};

export { activateForm, disableForm, addClass, publishAdvertisement, resetForm };
