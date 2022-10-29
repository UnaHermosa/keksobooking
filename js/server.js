const SERVER = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data1',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess, onFail) => {
  fetch(SERVER.GET)
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка загрузки данных!!!');
      }
    })      
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onFail(err.message);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER.POST,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if(response.ok) {
        return onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    })
};

export { getData, sendData };