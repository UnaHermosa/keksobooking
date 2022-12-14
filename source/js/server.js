const Server = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess, onFail) => {
  fetch(Server.GET)
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
  fetch(Server.POST,
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