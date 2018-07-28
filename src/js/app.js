import 'jquery';
import toggleSidebar from './lib/collapse.js';

document.getElementById('toggle-btn').addEventListener('click',toggleSidebar);



import 'slick-carousel';

$('.slider').slick({
  arrows: true,
  nextArrow: '<span class="arrow-next"></span>',
  prevArrow: '<span class="arrow-prev"></span>',
  fade: true
});


