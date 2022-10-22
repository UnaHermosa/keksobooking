const TITLE_LENGTH = {
  MIN: 30,
  MAX: 100,
};
const BORDER_STYLE = {
  errorColor: 'red',
  errorWidth: '3px',
  color: '#d9d9d3',
  width: '1px',
};
const MAX_PRICE = 1000000;

const form = document.querySelector('.ad-form');
const formTitle = form.querySelector('#title');
const price = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');

const onTitleInput = () => {
  const valueLength = formTitle.value.length;
  if(valueLength < TITLE_LENGTH.MIN) {
    formTitle.style.borderColor = BORDER_STYLE.errorColor;
    formTitle.style.borderWidth = BORDER_STYLE.errorWidth;
    formTitle.setCustomValidity(`Ещё ${(TITLE_LENGTH.MIN - valueLength)} симв.`);
  } else if(valueLength > TITLE_LENGTH.MAX) {
    formTitle.style.borderColor = BORDER_STYLE.errorColor;
    formTitle.style.borderWidth = BORDER_STYLE.errorWidth;
    formTitle.setCustomValidity('Удалите лишние ' + (valueLength - TITLE_LENGTH.MAX) + ' симв.');
  } else {
    formTitle.style.borderColor =  BORDER_STYLE.color;
    formTitle.style.borderWidth = BORDER_STYLE.width;
    formTitle.setCustomValidity('');
  }
  formTitle.reportValidity();
};

const onPriceInput = () => {
  if(price.value >= MAX_PRICE) {
    price.style.borderColor = BORDER_STYLE.errorColor;
    price.style.borderWidth = BORDER_STYLE.errorWidth;
    price.setCustomValidity('Цена за ночь должна быть меньше 1000000!');
  } else {
    price.style.borderColor = BORDER_STYLE.color;
    price.style.borderWidth = BORDER_STYLE.width;
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const onCapacityChange = () => {
  if(roomNumber.value === '1' && capacity.value !== '1') {
    capacity.style.borderColor = BORDER_STYLE.errorColor;
    capacity.style.borderWidth = BORDER_STYLE.errorWidth;
    capacity.setCustomValidity('В 1 комнате можно разместить только одного гостя.');
  } else if(roomNumber.value === '2' && capacity.value !== '1' && capacity.value !== '2'){
    capacity.style.borderColor = BORDER_STYLE.errorColor;
    capacity.style.borderWidth = BORDER_STYLE.errorWidth;
    capacity.setCustomValidity('В 2 комнатах можно разместить от 1 до 2 гостей.');
  } else if(roomNumber.value === '3' && capacity.value === '0') {
    capacity.style.borderColor = BORDER_STYLE.errorColor;
    capacity.style.borderWidth = BORDER_STYLE.errorWidth;
    capacity.setCustomValidity('В 3 комнатах можно разместить от 1 до 3 гостей');
  }  else if(roomNumber.value === '100' && capacity.value !== '0') {
    capacity.style.borderColor = BORDER_STYLE.errorColor;
    capacity.style.borderWidth = BORDER_STYLE.errorWidth;
    capacity.setCustomValidity('100 комнат не для гостей!');
  } else {
    capacity.style.borderColor = BORDER_STYLE.color;
    capacity.style.borderWidth = BORDER_STYLE.width;
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
};

formTitle.addEventListener('input', onTitleInput);
price.addEventListener('input', onPriceInput);
capacity.addEventListener('change', onCapacityChange);
