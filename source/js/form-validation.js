const TITLE_LENGTH = {
  MIN: 30,
  MAX: 100,
};

const borderStyle = {
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

const addErrorStyle = (element) => {
  element.style.borderColor = borderStyle.errorColor;
  element.style.borderWidth = borderStyle.errorWidth;
};

const addNormalStyle = (element) => {
  element.style.borderColor = borderStyle.color;
  element.style.borderWidth = borderStyle.width;  
}

const onTitleInput = () => {
  const valueLength = formTitle.value.length;
  if(valueLength === 0) {
    addErrorStyle(formTitle);
  } else if(valueLength < TITLE_LENGTH.MIN) {
    addErrorStyle(formTitle);
    formTitle.setCustomValidity(`Ещё ${(TITLE_LENGTH.MIN - valueLength)} симв.`);
  } else if(valueLength > TITLE_LENGTH.MAX) {
    addErrorStyle(formTitle);
    formTitle.setCustomValidity('Удалите лишние ' + (valueLength - TITLE_LENGTH.MAX) + ' симв.');
  } else {
    addNormalStyle(formTitle);
    formTitle.setCustomValidity('');
  }
  formTitle.reportValidity();
};

const onPriceInput = () => {
  if(price.value.length === 0) {
    addErrorStyle(price);
    price.setCustomValidity('Введите цену за ночь!');
  } else if(price.value >= MAX_PRICE) {
    addErrorStyle(price);
    price.setCustomValidity('Цена за ночь должна быть меньше 1000000!');
  } else {
    addNormalStyle(price);
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const onCapacityChange = () => {
  if(roomNumber.value === '1' && capacity.value !== '1') {
    addErrorStyle(capacity);
    capacity.setCustomValidity('В 1 комнате можно разместить только одного гостя.');
  } else if(roomNumber.value === '2' && capacity.value !== '1' && capacity.value !== '2'){
    addErrorStyle(capacity);
    capacity.setCustomValidity('В 2 комнатах можно разместить от 1 до 2 гостей.');
  } else if(roomNumber.value === '3' && capacity.value === '0') {
    addErrorStyle(capacity);
    capacity.setCustomValidity('В 3 комнатах можно разместить от 1 до 3 гостей');
  }  else if(roomNumber.value === '100' && capacity.value !== '0') {
    addErrorStyle(capacity);
    capacity.setCustomValidity('100 комнат не для гостей!');
  } else {
    addNormalStyle(capacity);
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
};

formTitle.addEventListener('input', onTitleInput);
price.addEventListener('input', onPriceInput);
capacity.addEventListener('change', onCapacityChange);

export { addErrorStyle, addNormalStyle };
