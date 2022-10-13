const typeOfHousing = document.querySelector('[name = type]');

const onTimeSelectChange = (value1, value2) => {
  return (evt) => {
    evt.preventDefault();
    switch(value1.value) {
      case '12:00':
        value2.value = '12:00';
        break;
      case '13:00':
        value2.value = '13:00';
        break;
      case '14:00':
        value2.value = '14:00';
        break;
    }
  };
};

const onTypeOfHousingSelectChange = () => {
  
};

export { onTimeSelectChange };