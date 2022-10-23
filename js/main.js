import { disableForm } from './form.js';
import { getMap, markers } from './map.js';
import './form-validation.js';
import { getData } from './server.js';

disableForm();
getMap();
getData((ads) => {
  markers(ads.slice(0, 10));
});