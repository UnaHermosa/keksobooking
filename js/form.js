import { CenterTokyo, getCoordinates, mainMarker, map, ZOOM_MAP } from './map.js';
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

const minPriceOfHousing = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const roomsForGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1','2', '3'],
  100: [0],
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
        formPrice.placeholder = minPriceOfHousing.bungalow;
        formPrice.min = minPriceOfHousing.bungalow;
        break;
      case 'flat':
        formPrice.placeholder = minPriceOfHousing.flat;
        formPrice.min = minPriceOfHousing.flat;
        break;
      case 'hotel':
        formPrice.placeholder = minPriceOfHousing.hotel;
        formPrice.min = minPriceOfHousing.hotel;
        break;
      case 'house':
        formPrice.placeholder = minPriceOfHousing.house;
        formPrice.min = minPriceOfHousing.house;
        break;
      case 'palace':
        formPrice.placeholder = minPriceOfHousing.palace;
        formPrice.min = minPriceOfHousing.palace;
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
  getCoordinates(CenterTokyo);
  address.setAttribute('readonly', '');
};

formType.addEventListener('change', onTypeOfHousingSelectChange());
timeIn.addEventListener('change', onTimeSelectChange(timeOut));
timeOut.addEventListener('change', onTimeSelectChange(timeIn));

const clearForm = () => {
  formTitle.value = '';
  formType.value = 'flat';
  formPrice.value = '';
  formPrice.placeholder = minPriceOfHousing.flat;
  roomNumber.value = '1';
  capacity.value = '3';
  if(!formTitle.checkValidity()) {
    addNormalStyle(formTitle);
  }
  if(!formPrice.checkValidity()) {
    addNormalStyle(formPrice);
  }
  if(!capacity.checkValidity()) {
    addNormalStyle(capacity);
  }
}

const publishAdvertisement = () => {
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const formData = new FormData(adForm);
    
    if(!formTitle.checkValidity() || !formPrice.checkValidity() || !capacity.checkValidity()) {
      !formTitle.checkValidity() ? addErrorStyle(formTitle) : addNormalStyle(formTitle);

      !formPrice.checkValidity() ? addErrorStyle(formPrice) : addNormalStyle(formPrice);

      !roomsForGuests[roomNumber.value].includes(capacity.value) ? addErrorStyle(capacity) : addNormalStyle(capacity);
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
    mainMarker.setLatLng(CenterTokyo);
    map.setView(CenterTokyo, ZOOM_MAP);
    getCoordinates(CenterTokyo);
  })
};

export { activateForm, disableForm, addClass, publishAdvertisement, resetForm };
