import { activateForm } from './form.js';
import { getSimilarArticles } from './popup.js';

const address = document.querySelector('#address');
const L = window.L;
const CenterTokyo = {
  lat: 35.6895,
  lng: 139.692,
};

const ZOOM_MAP = 14;
const FLOAT_COUNT = 5;
const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const MAX_ADJUSTMENTS_COUNT = 10;

const map = L.map('map-canvas');
const getMap = () => {
  map.on('load', () => {
    activateForm();
  }).setView(
    {
      lat: CenterTokyo.lat,
      lng: CenterTokyo.lng, 
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
    lat: CenterTokyo.lat,
    lng: CenterTokyo.lng, 
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

const markerGroup = L.layerGroup().addTo(map);

const clearMarkers = () => markerGroup.clearLayers();

const markers = (data) => {
  data.slice(0, MAX_ADJUSTMENTS_COUNT).forEach(element => {
    const pin = L.icon({
      iconUrl: './leaflet/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker({
      lat: element.location.lat,
      lng: element.location.lng,
    },
    {
      icon: pin,
    });
    map.innerHTML = '';
    marker.addTo(markerGroup).bindPopup(getSimilarArticles(element), {
      keepInView: true,
    });
  })
};

export {mainMarker, map, CenterTokyo, getMap, getCoordinates, markers, clearMarkers, ZOOM_MAP };
