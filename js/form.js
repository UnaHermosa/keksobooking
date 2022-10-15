export { onTimeSelectChange, onTypeOfHousingSelectChange };

const onTimeSelectChange = (firstElement, secondElement) => {
  return (evt) => {
    evt.preventDefault();
    switch(firstElement.value) {
      case '12:00':
        secondElement.value = '12:00';
        break;
      case '13:00':
        secondElement.value = '13:00';
        break;
      case '14:00':
        secondElement.value = '14:00';
        break;
    }
  };
};

const onTypeOfHousingSelectChange = (firstElement, secondElement) => {
  return (evt) => {
    evt.preventDefault();
    switch (firstElement.value) {
      case 'bungalow':
        secondElement.placeholder = '0';
        secondElement.min = '0';
        break;
      case 'flat':
        secondElement.placeholder = '1000';
        secondElement.min = '1000';
        break;
      case 'hotel':
        secondElement.placeholder = '3000';
        secondElement.min = '3000';
        break;
      case 'house':
        secondElement.placeholder = '5000';
        secondElement.min = '5000';
        break;
      case 'palace':
        secondElement.placeholder = '10000';
        secondElement.min = '10000';
        break;
    }
  };
};