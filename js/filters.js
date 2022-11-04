import { clearMarkers, markers } from './map.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const mapFeaturesList = document.querySelectorAll('.map__checkbox');

const DEFAULT_VALUE = 'any';
const priceFilter = {
  'low': {
    start: 0,
    end: 10000,
  },
  'middle': {
    start: 10000,
    end: 50000,
  },
  'high': {
    start:50000,
    end: 1000000,
  },
};

const MAX_ADJUSTMENTS_COUNT = 10;

const checkType = (ad) => housingType.value === String(ad.offer.type) || housingType.value === DEFAULT_VALUE;
const checkGuests = (ad) => housingGuests.value === String(ad.offer.guests) || housingGuests.value === DEFAULT_VALUE;
const checkPrice = (ad) => housingPrice.value === DEFAULT_VALUE || (ad.offer.price >= priceFilter[housingPrice.value].start && ad.offer.price <= priceFilter[housingPrice.value].end);
const checkRooms = (ad) => housingRooms.value === String(ad.offer.rooms) || housingRooms.value === DEFAULT_VALUE;
const checkFeatures = (ad) => Array.from(mapFeaturesList)
  .every((filterFeature) => {
    if (!filterFeature.checked) {
      return true;
    }
    if (!ad.offer.features) {
      return false;
    }
    return ad.offer.features.includes(filterFeature.value);
  });


const checkFilter = (ad) => {
  if(checkType(ad) &&
  checkGuests(ad) &&
  checkPrice(ad) &&
  checkRooms(ad) &&
  checkFeatures(ad)) {
    return ad;
  }
};

const checkAllFilters = (ads) => {
  const filteredData = ads.slice();
  const data = filteredData.filter(checkFilter).slice(0, MAX_ADJUSTMENTS_COUNT);
  markers(data);
};

const changeFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    clearMarkers();
    cb();
  })
};

export { checkAllFilters, changeFilters };
