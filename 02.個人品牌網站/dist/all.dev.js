"use strict";

// RWD 設計，確認目前螢幕解析度
var diWidth = screen.width; // DOM
// menu

var mobileMenu = document.querySelector(".mobile-menu");
var menu = document.querySelector(".menu"); // carousel

var carouselCards = document.querySelector(".carousel-cards");
var carouselCard = document.querySelectorAll(".carousel-card");
var dot = document.querySelectorAll(".dot"); // modal

var openModal = document.querySelector("[data-open-modal]");
var closeModal = document.querySelector("[data-close-modal]");
var modal = document.querySelector("[data-modal-new]"); // 手機板 MENU

mobileMenu.addEventListener("click", function (e) {
  menu.classList.toggle("d-block");
}); // Modal

if (modal) {
  openModal.addEventListener("click", function () {
    modal.classList.remove("d-none");
  });
  closeModal.addEventListener("click", function () {
    modal.classList.add("d-none");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.add("d-none");
  });
} // 首頁文章輪播效果


var num = 0;

if (diWidth > 375 && dot[0] && carouselCards) {
  for (d = 0; d < dot.length; d++) {
    dot[d].dataset.num = d;
  }

  dot.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var active = e.target.dataset.num;
      num = active - 1;
      changeCard();
    });
  });
  dot[0].style.backgroundColor = "#000000";
  var interval = setInterval(changeCard, 2500);
}

function changeCard() {
  var margin = carouselCards.clientWidth * 0.05;

  if (diWidth <= 767) {
    margin = carouselCards.clientWidth * 0.02;
    menu.classList.add("d-none");
  }

  num++;
  if (num > carouselCard.length - 1) num = 1;else if (num == carouselCard.length - 1) num = 0;

  for (i = 0; i < carouselCard.length; i++) {
    carouselCard[i].style.transform = "translateX(".concat(-num * (carouselCard[i].clientWidth + margin), "px)");
  }

  for (y = 0; y < dot.length; y++) {
    if (y == num) dot[y].style.backgroundColor = "#000000";else dot[y].style.backgroundColor = "#E9E9E9";
  }
}