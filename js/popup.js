import { createAdvertismentsArray } from './data.js'

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const articlesData = createAdvertismentsArray();

const getRoomsMessage = (room) => {
  let message = ''; 
  if(room === 1) {
    message = 'комната';
  } else if (room >= 2 && room <= 4) {
    message = 'комнаты';
  } else {
    message = 'комнат';
  }
  return message;
}

const getGuestsMessage = (guest) => {
  let message = '';
  if(guest === 1) {
    message = 'гостя';
  } else {
    message = 'гостей';
  } 
  return message; 
}

const getTypeHousing = (type) => {
  let typeHousing = '';
  switch (type) {
    case 'flat':
      typeHousing = 'Квартира';
      break;
    case 'bungalow':
      typeHousing = 'Бунгало';
      break;
    case 'house':
      typeHousing = 'Дом';
      break;
    case 'palace':
      typeHousing = 'Дворец';
      break;
  }
  return typeHousing;
}

const getFeaturesList = (array, list) => {
  list.innerHTML = '';
  array.forEach(element => {
    const item = cardTemplate.querySelector('.popup__feature').cloneNode(true);
    item.className = `popup__feature popup__feature--${element}`;
    list.appendChild(item);
  })
}

const getPhotosList = (array, list) => {
  list.innerHTML = '';
  array.forEach(element => {
    const item = cardTemplate.querySelector('.popup__photo').cloneNode(true);
    item.src = element;
    list.appendChild(item);
  })
}

const getSimilarArticles = (array) => {
  let result = [];
  array.forEach((element) => {
    const item = cardTemplate.cloneNode(true);
    const features = item.querySelector('.popup__features');
    const photos = item.querySelector('.popup__photos');
    const guest = element.offer.guests;
    const room = element.offer.rooms;

    (!element.offer.title) ? item.querySelector('.popup__title').classList.add('hidden') : item.querySelector('.popup__title').textContent = element.offer.title;

    (!element.offer.address) ? item.querySelector('.popup__text--address').classList.add('hidden') : item.querySelector('.popup__text--address').textContent = element.offer.address;

    (!element.offer.price) ? item.querySelector('.popup__text--price').calssList.add('hidden') : item.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;

    (!element.offer.type) ? item.querySelector('.popup__type').classList.add('hidden') : item.querySelector('.popup__type').textContent = getTypeHousing(element.offer.type);

    (!element.offer.guests || !element.offer.rooms) ? item.querySelector('.popup__text--capacity').classList.add('hidden') : item.querySelector('.popup__text--capacity').textContent = `${room} ${getRoomsMessage(room)} для ${guest} ${getGuestsMessage(guest)}`;

    (!element.offer.checkout || !element.offer.checkin) ? item.querySelector('.popup__text--time').classList.add('hidden') :   item.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;

    (!element.offer.features) ? features.classList.add('hidden') :   getFeaturesList(element.offer.features, features);

    (!element.offer.description) ? item.querySelector('.popup__description').classList.add('hidden') : item.querySelector('.popup__description').textContent = element.offer.description;

    (!element.offer.photos) ? photos.classList.add('hidden') :  getPhotosList(element.offer.photos, photos);

    (!element.author.avatar) ? item.querySelector('.popup__avatar').classList.add('hidden') : item.querySelector('.popup__avatar').src = element.author.avatar;

    result.push(item);
  });
  return result;
}

mapCanvas.appendChild(getSimilarArticles(articlesData)[5]);

// getSimilarArticles(articlesData).forEach(item => {
//   mapCanvas.appendChild(item);
// });
