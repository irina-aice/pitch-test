'use strict';

(function () {
  const buttonLess = document.querySelector('.js-button-quantity-less');
  const buttonMore = document.querySelector('.js-button-quantity-more');
  const input = document.querySelector('.js-quantity-input');

  if (!buttonLess || !buttonMore || !input) {
    return false;
  }
  buttonLess.addEventListener('click', () => {
    let value = 0;
    value = +input.value - 1;

    if (value >= 0) {
      input.value = value;
    }
  });

  buttonMore.addEventListener('click', () => {
    let value = 0;
    value = +input.value + 1;
    input.value = value;
  });
})();
