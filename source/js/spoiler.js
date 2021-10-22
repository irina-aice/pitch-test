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
