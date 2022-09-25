'use strict';

const getInteger = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (min >= 0 && max && max > min && randomNumber <= max && randomNumber >= min) ?
    randomNumber : -1;
};

const getFloatInteger = (min, max, count) => {
  let randomNumber = parseFloat(Math.random() * (max - min + 1)).toFixed(count);
  return (min>= 0 && max >= 0 && max > min && randomNumber <= max && randomNumber >= min) ? randomNumber : -1;
};
