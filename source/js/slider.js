'use strict';

(function () {
  const slider = document.querySelector('.js-slider');

  if (!slider) {
    return false;
  }

  new window.Swiper(slider, {
    /*autoplay: {
      delay: 5000,
    }*/
  })
})();
