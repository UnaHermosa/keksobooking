import { showErrorMessage } from './util.js';
import { disableForm, addClass, publishAdvertisement, resetForm } from './form.js';
import { getMap, markers } from './map.js';
import './form-validation.js';
import { getData } from './server.js';
import { checkAllFilters, changeFilters } from './filters.js';


const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

disableForm();

getMap();

getData((ads) => {
  markers(ads);
  mapFilters.classList.remove('map__filters--disabled');
  addClass(mapFiltersList, false);
  changeFilters(() => checkAllFilters(ads));
}, (err) => showErrorMessage(err));

publishAdvertisement();

resetForm();
