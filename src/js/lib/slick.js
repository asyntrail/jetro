/*eslint-env jquery*/

import 'slick-carousel';

function initSlider() {
  $('.slider').slick({
    arrows: true,
    nextArrow: '<span class="arrow-next"></span>',
    prevArrow: '<span class="arrow-prev"></span>',
    fade: true
  });
}

module.exports = initSlider;
