/*eslint-env jquery*/

import {TimelineMax} from 'gsap';
import {TweenMax} from 'gsap';


function animation() {

  let tl = new TimelineMax();

  tl
    .from('.logo__part1',2,{ease: Elastic.easeOut.config(1, 1), y: -230})
    .from('.logo__part2',0.5,{x:-52})
    .from('.about',2,{x:130,opacity:0},{y:0,opacity:1})
    .from('.list',1.5,{y:-130,opacity:0},{y:0,opacity:1})
    .from('.gallery',2,{y:130,opacity:0},{y:0,opacity:1});

  $('.gallery__box').hover(over, out);

  function over() {
    TweenMax.to(this, 0.5);
    TweenMax.to($(this).find('img'), 0.3, {rotation:0, scale:1.1, x:0, delay:0.2});
  }

  function out() {
    TweenMax.to(this, 0.5);
    TweenMax.to($(this).find('img'), 0.3, {rotation:0, scale:1, x:0, overwrite:'all'});
  }
}

module.exports = animation;
