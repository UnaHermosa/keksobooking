const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0) {
      return -1;
    }
  
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const getRandomFloatNumber = (min, max, count) => {
    if (min < 0 || max < 0) {
      return -1;
    }
  
    if (max < min) {
      [min, max] = [max, min]
    }
  
    return parseFloat(Math.random() * (max - min + 1)).toFixed(count);
  };
  
  const getRandomArrayElement = (array) => {
    return getRandomNumber(0, array.length - 1);
  };
  
  const getRandomUniqeMassive = (array) => {
    const randomLength = getRandomNumber(1, array.length);
    const randomUniqeMassive = new Set();
    for (let i = 0; i < randomLength; i++) {
      randomUniqeMassive.add(array[getRandomArrayElement(array)]);
    };
    return randomUniqeMassive;
  };

  export {getRandomNumber, getRandomFloatNumber, getRandomArrayElement, getRandomUniqeMassive}
