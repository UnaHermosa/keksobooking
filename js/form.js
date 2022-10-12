const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const onTimeInChange = () => {
  switch(timeInSelect.value) {
    case '12:00':
      timeOutSelect.value = '12:00';
      break;
    case '13:00':
      timeOutSelect.value = '13:00';
      break;
    case '14:00':
      timeOutSelect.value = '14:00';
      break;
  }
};

const onTimeOutChange = () => {
  switch(timeOutSelect.value) {
    case '12:00':
      timeInSelect.value = '12:00';
      break;
    case '13:00':
      timeInSelect.value = '13:00';
      break;
    case '14:00':
      timeInSelect.value = '14:00';
      break;
  }
};

timeInSelect.addEventListener('change', onTimeInChange);
timeOutSelect.addEventListener('change', onTimeOutChange);