'use strict';

(function () {
  const slider = document.querySelector('.js-slider');
  const sliderPagination = document.querySelector('.js-slider-pagination');
  const prevSlide = document.querySelector('.js-slider-prev');
  const nextSlide = document.querySelector('.js-slider-next');

  if (!slider || !sliderPagination || !prevSlide || !nextSlide) {
    return false;
  }

  new window.Swiper(slider, {
    pagination: {
      el: sliderPagination,
      clickable: true,
      type: 'fraction',
      totalClass: 'slider__pagination-total',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <span class="slider__divider"></span> <span class="${totalClass}"></span>`;
      },
      formatFractionCurrent: function(number) {
        if (number < 10) {
          return `0${  number}`;
        }
        return number;
      },
      formatFractionTotal: function(number) {
        if (number < 10) {
          return `0${  number}`;
        }
        return number;
      },
    },
    navigation: {
      nextEl: nextSlide,
      prevEl: prevSlide,
    },
    /*autoplay: {
      delay: 5000,
    }*/
  });
})();
