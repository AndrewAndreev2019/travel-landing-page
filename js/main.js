(function() {
  const header = document.querySelector('.header'); //выбираем класс .header
  window.onscroll = () => { //стрелочная функция
    if (window.scrollY > 50) { //если прокрутка по вертикали > 50
      header.classList.add('header-active'); //то активируем класс header-active(без точки перед именем)
    }
    else {
      header.classList.remove('header-active'); //при прокрутке вверх деактивируем класс header-active
    }
  };
}()); //самовызывающася функция, вызывается при загрузке main.js

//burger handler
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const menuClose = document.querySelector('.header-burger-close')
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header-nav-active');//перед header-nav-active точку не ставим
  });
  menuClose.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');//перед header-nav-active точку не ставим
  });
}());