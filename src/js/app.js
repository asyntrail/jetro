/*eslint-env jquery*/

$('.toggle-btn').click(function() {
  $('.sidebar-menu').toggleClass('active');
});

import initSlider from './lib/slick.js';
initSlider();

import 'lightbox2';


import animation from './lib/gsap.js';

animation();

