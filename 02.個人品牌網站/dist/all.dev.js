"use strict";

var _swiper = _interopRequireDefault(require("swiper"));

var _modules = require("swiper/modules");

require("swiper/css");

require("swiper/css/navigation");

require("swiper/css/pagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// core version + navigation, pagination modules:
// import Swiper and modules styles
var swiper = new _swiper["default"]('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});