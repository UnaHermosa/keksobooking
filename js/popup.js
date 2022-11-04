const typeOfHousing = {
  'bungalow': 'бунгало',
  'flat': 'квартира',
  'house': 'дом',
  'hotel': 'отель',
  'palace': 'дворец',
};
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
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
      typeHousing = typeOfHousing.flat;
      break;
    case 'bungalow':
      typeHousing = typeOfHousing.bungalow;
      break;
    case 'hotel':
      typeHousing = typeOfHousing.hotel;
      break;
    case 'house':
      typeHousing = typeOfHousing.house;
      break;
    case 'palace':
      typeHousing = typeOfHousing.palace;
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

const getSimilarArticles = (data) => {
  const item = cardTemplate.cloneNode(true);
  const features = item.querySelector('.popup__features');
  const photos = item.querySelector('.popup__photos');
  const guest = data.offer.guests;
  const room = data.offer.rooms;

  (!data.offer.title) ? item.querySelector('.popup__title').classList.add('hidden') : item.querySelector('.popup__title').textContent = data.offer.title;

  (!data.offer.address) ? item.querySelector('.popup__text--address').classList.add('hidden') : item.querySelector('.popup__text--address').textContent = data.offer.address;

  (!data.offer.price) ? item.querySelector('.popup__text--price').calssList.add('hidden') : item.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;

  (!data.offer.type) ? item.querySelector('.popup__type').classList.add('hidden') : item.querySelector('.popup__type').textContent = getTypeHousing(data.offer.type);

  (!data.offer.guests || !data.offer.rooms) ? item.querySelector('.popup__text--capacity').classList.add('hidden') : item.querySelector('.popup__text--capacity').textContent = `${room} ${getRoomsMessage(room)} для ${guest} ${getGuestsMessage(guest)}`;

  (!data.offer.checkout || !data.offer.checkin) ? item.querySelector('.popup__text--time').classList.add('hidden') :   item.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  (!data.offer.features) ? features.classList.add('hidden') :   getFeaturesList(data.offer.features, features);

  (!data.offer.description) ? item.querySelector('.popup__description').classList.add('hidden') : item.querySelector('.popup__description').textContent = data.offer.description;

  (!data.offer.photos) ? photos.classList.add('hidden') :  getPhotosList(data.offer.photos, photos);

  (!data.author.avatar) ? item.querySelector('.popup__avatar').classList.add('hidden') : item.querySelector('.popup__avatar').src = data.author.avatar;

  return item;
};

export { getSimilarArticles };
