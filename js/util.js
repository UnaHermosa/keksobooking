const MODAL_SHOW_TIME = 4000;

const messageStyle = {
  zIndex: '1000',
  position: 'absolute',
  left: '0',
  rigth: '0',
  top: '0',
  padding: '30px 20px',
  fontSize: '40px',
  fontWeight: '700',
  backgroundColor: 'red',
  color: 'white',
  textAlign: 'center',
};

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
  messageContainer.style.zIndex = messageStyle.zIndex;
  messageContainer.style.position = messageStyle.position;
  messageContainer.style.left = messageStyle.left;
  messageContainer.style.top = messageStyle.top;
  messageContainer.style.right = messageStyle.rigth;
  messageContainer.style.padding = messageStyle.padding;
  messageContainer.style.fontSize = messageStyle.fontSize;
  messageContainer.style.fontWeight = messageStyle.fontWeight;
  messageContainer.style.color = messageStyle.color;
  messageContainer.style.backgroundColor = messageStyle.backgroundColor;
  messageContainer.style.textAlign = messageStyle.textAlign;

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
