const _ = window._;

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
  return _.random(min, max);
};

const getRandomFloatNumber = (min, max, count) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  return parseFloat(_.random(min, max, true).toFixed(count));
};

const getRandomArrayElement = (array) => {
  return getRandomNumber(0, array.length - 1);
};

const getRandomUniqeMassive = (array) => {
  const randomLength = getRandomNumber(1, array.length);
  const randomUniqeSet = new Set();
  for (let i = 0; i < randomLength; i++) {
    randomUniqeSet.add(array[getRandomArrayElement(array)]);
  }
  let randomUniqeMassive = Array.from(randomUniqeSet);
  return randomUniqeMassive;
};

export { getRandomNumber, getRandomFloatNumber, getRandomArrayElement, getRandomUniqeMassive }
