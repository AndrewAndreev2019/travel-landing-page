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