import { activateForm } from './form.js';
export {mainMarker, map, CENTER_TOKYO, getMap, getCoordinates };

const address = document.querySelector('#address');
const L = window.L;
const CENTER_TOKYO = {
  lat: 35.6895,
  lng: 139.692,
};
const ZOOM_MAP = 10;
const FLOAT_COUNT = 5;
const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const map = L.map('map-canvas');
const getMap = () => {
  map.on('load', () => {
    activateForm();
  }).setView(
    {
      lat: CENTER_TOKYO.lat,
      lng: CENTER_TOKYO.lng, 
    }, ZOOM_MAP);
  L.tileLayer(
    LeafletParameters.TILE_LAYER,
    {
      attribution: LeafletParameters.ATTRIBUTION,
    }).addTo(map);
};

const MAIN_PIN = L.icon(
  {
    iconUrl: './leaflet/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: CENTER_TOKYO.lat,
    lng: CENTER_TOKYO.lng, 
  },
  {
    draggable: true,
    icon: MAIN_PIN,
  },
);

const getCoordinates = (coordinates) => {
  address.value = `${coordinates.lat.toFixed(FLOAT_COUNT)}, ${coordinates.lng.toFixed(FLOAT_COUNT)}`;
};

const getCurrentCoordinates = () => mainMarker.on('moveend', (evt) => {
  const currentCoordinate = evt.target.getLatLng();
  getCoordinates(currentCoordinate);
});

mainMarker.addTo(map);
getCurrentCoordinates();
