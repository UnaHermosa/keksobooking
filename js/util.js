const MODAL_SHOW_TIME = 4000;

const onModalEscPress = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    closeErrorModal();
    closeSuccessModal();
  }
};

const closeErrorModal = () => {
  errorModal.remove();
  document.removeEventListener('keydown', onModalEscPress);
  document.removeEventListener('click', closeErrorModal);
  errorButton.removeEventListener('click', closeErrorModal);
};

const closeSuccessModal = () => {
  successModal.remove();
  document.removeEventListener('keydown', onModalEscPress);
  document.removeEventListener('click', closeSuccessModal);
};

const errorModal = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorMessage = errorModal.querySelector('.error__message');
const successModal = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorButton = errorModal.querySelector('.error__button');

const showErrorMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = '1000';
  messageContainer.style.position = 'absolute';
  messageContainer.style.left = '0';
  messageContainer.style.top = '0';
  messageContainer.style.right = '0';
  messageContainer.style.padding = '30px 20px';
  messageContainer.style.fontSize = '40px';
  messageContainer.style.fontWeight = '700';
  messageContainer.style.color = 'white';
  messageContainer.style.backgroundColor = 'red';
  messageContainer.style.textAlign = 'center';

  messageContainer.textContent = message;
  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, MODAL_SHOW_TIME);
};

const showErrorModal = () => {
  errorMessage.textContent = 'Ошибка загрузки данных';
  document.body.appendChild(errorModal);
  document.addEventListener('keydown', onModalEscPress);
  document.addEventListener('click', closeErrorModal);
  errorButton.addEventListener('click', closeErrorModal);
};

const showSuccessModal = () => {
  document.body.appendChild(successModal);
  document.addEventListener('keydown', onModalEscPress);
  document.addEventListener('click', closeSuccessModal);
};

export { showErrorModal, showSuccessModal, showErrorMessage };
