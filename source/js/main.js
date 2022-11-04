import { showErrorMessage, debounce } from './util.js';
import { disableForm, addClass, publishAdvertisement, resetForm } from './form.js';
import { getMap, markers } from './map.js';
import './form-validation.js';
import { getData } from './server.js';
import { checkAllFilters, changeFilters } from './filters.js';
import './picture.js'

const RENDER_DELAY = 500;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

disableForm();

getMap();

getData((ads) => {
  markers(ads);
  mapFilters.classList.remove('map__filters--disabled');
  addClass(mapFiltersList, false);
  changeFilters(debounce(() => checkAllFilters(ads), RENDER_DELAY));
}, (err) => showErrorMessage(err));

publishAdvertisement();

resetForm();
