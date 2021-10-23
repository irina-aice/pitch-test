'use strict';

(function () {
  const slider = document.querySelector('.js-slider');
  const sliderPagination = document.querySelector('.js-slider-pagination');

  if (!slider || !sliderPagination) {
    return false;
  }

  new window.Swiper(slider, {
    pagination: {
      el: sliderPagination,
      clickable: true,
      type: 'fraction',
      renderFraction: function(currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <span class="slider__divider">-</span> <span class="${totalClass}"></span>`;
      },
    }
    /*autoplay: {
      delay: 5000,
    }*/
  })
})();
