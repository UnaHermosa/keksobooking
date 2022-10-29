import { showErrorModal, showErrorMessage } from './util.js';
import { disableForm, addClass, publishAdvertisement, resetForm } from './form.js';
import { getMap, markers } from './map.js';
import './form-validation.js';
import { getData } from './server.js';

const MAX_ADJUSTMENTS_COUNT = 10;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

disableForm();
getMap();
getData((ads) => {
  markers(ads.slice(0, MAX_ADJUSTMENTS_COUNT));
  mapFilters.classList.remove('map__filters--disabled');
  addClass(mapFiltersList, false);
}, (err) => showErrorMessage(err));

publishAdvertisement();
resetForm();
