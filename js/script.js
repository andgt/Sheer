'use strict'

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

// Кнопка наверх

let scrollUp = document.querySelector(".button__scroll-up");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }
};

scrollUp.onclick = function (evt) {
  window.scrollTo(0, 0);
};

// Табы
let tab = function() {
  let tabBtn = document.querySelectorAll(".description__link");
  let descriptionBlock = document.querySelectorAll(".description__inner");
  let tabName;

  tabBtn.forEach(element => {
    element.addEventListener("click", selectTab)
  });

  function selectTab(evt) {
    evt.preventDefault();
    tabBtn.forEach(element => {
      element.classList.remove("description__inner--tab");
    });
    this.classList.add("description__inner--tab");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    descriptionBlock.forEach(element => {
      if (element.classList.contains(tabName)) {
        element.classList.add("description__inner--tab");
      } else {
        element.classList.remove("description__inner--tab");
      }
    });
  };
};

tab();
