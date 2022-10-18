const formTitle = document.querySelector('#title');
const submitButton = document.querySelector('.ad-form__submit');

formTitle.addEventListener('invalid', () => {
  if(formTitle.validity.tooShort) {
    formTitle.setCustomValidity('Описание не должно быть короче 30 символов!');
  } else if (formTitle.validity.tooLong) {
    formTitle.setCustomValidity('Описание не может быть длиннее 100 символов!');
  } else if (formTitle.validity.valueMissing) {
    formTitle.setCustomValidity('Описание должно быть обязательно!');
  } else {
    formTitle.setCustomValidity('');
  }
});

