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

'use strict';

(function () {
  const spoilerList = document.querySelectorAll('.js-spoiler');
  const SPOILER_OPEN_CLASS = 'spoiler--open';

  for (let i = 0; i < spoilerList.length; i++) {
    const spoiler = spoilerList[i];

    const spoilerButton = spoiler.querySelector('.js-spoiler-button');
    const spoilerContent = spoiler.querySelector('.js-spoiler-content');

    spoilerButton.addEventListener('click', () => {
      if (spoiler.classList.contains(SPOILER_OPEN_CLASS)) {
        spoiler.classList.remove(SPOILER_OPEN_CLASS);

        window.gsap.to(spoilerContent, {height: 0});
      } else {
        spoiler.classList.add(SPOILER_OPEN_CLASS);

        window.gsap.set(spoilerContent, {height: 'auto'});
        window.gsap.from(spoilerContent, {height: 0});
      }
    });
  }
})();
