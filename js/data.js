import {getRandomNumber, getRandomFloatNumber, getRandomArrayElement, getRandomUniqeMassive} from './util.js';

const FLOAT_COUNT = 5;
const OBJECT_COUNT = 10;

const OffersOptions = {
    APPARTMENTS_COST: {
      MIN: 500,
      MAX: 1000000
    },
    ROOMS_NUMBER: {
      MIN: 1,
      MAX: 10
    },
    GUESTS: {
      MIN: 1,
      MAX: 8
    },
    LATITUDE: {
      MIN: 35.65000,
      MAX: 35.70000
    },
    LONGITUDE: {
      MIN: 139.70000,
      MAX: 139.80000
    },
    AVATAR_COUNT: {
      MIN: 1,
      MAX: 10
    },
    TYPES: [
      'palace',
      'flat',
      'house',
      'bungalow'
    ],
    CHECKINS: [
      '12:00',
      '13:00',
      '14:00'
    ],
    CHECKOUTS: [
      '12:00',
      '13:00',
      '14:00'
    ],
    FEATURES: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner'
    ],
    PHOTOS: [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
    ]
  };

  const createAdvertismentsArray = () => {
    const advertisments = [];
    for (let i = 1; i <= OBJECT_COUNT; i++) {
      let location_x = getRandomFloatNumber(OffersOptions.LATITUDE.MIN, OffersOptions.LATITUDE.MAX, FLOAT_COUNT);
      let location_y = getRandomFloatNumber(OffersOptions.LONGITUDE.MIN, OffersOptions.LONGITUDE.MAX, FLOAT_COUNT);
      let advertisement = {
        author: {
          avatar: (i < OffersOptions.AVATAR_COUNT.MAX) ? 'img/avatars/user' + '0' + i + '.png' : 'img/avatars/user' + i + '.png'
        },
        offer: {
          title: 'Аппартаменты Вашей мечты',
          address: location_x + ', ' + location_y,
          price: getRandomNumber(OffersOptions.APPARTMENTS_COST.MIN, OffersOptions.APPARTMENTS_COST.MAX),
          type: OffersOptions.TYPES[getRandomArrayElement(OffersOptions.TYPES)],
          rooms: getRandomNumber(OffersOptions.ROOMS_NUMBER.MIN, OffersOptions.ROOMS_NUMBER.MAX),
          guests: getRandomNumber(OffersOptions.GUESTS.MIN, OffersOptions.GUESTS.MAX),
          checkin: OffersOptions.CHECKINS[getRandomArrayElement(OffersOptions.CHECKINS)],
          checkout: OffersOptions.CHECKOUTS[getRandomArrayElement(OffersOptions.CHECKOUTS)],
          features: getRandomUniqeMassive(OffersOptions.FEATURES),
          description: 'Рай для Вас',
          photos: getRandomUniqeMassive(OffersOptions.PHOTOS)
        },
        location: {
          x: location_x,
          y: location_y
        }
      };
      advertisments.push(advertisement);
    };  
    return advertisments;
  };

  export {createAdvertismentsArray};
