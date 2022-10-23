const getData = (onSuccsess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((response) => {
      onSuccsess(response);
    });
};

export { getData};