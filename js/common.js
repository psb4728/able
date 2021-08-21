const hamburger = document.querySelector('.hamburger');
const hamWrap = document.querySelector('.toggle_wrap');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const menuInfo = document.querySelector('.menu_info');

// Hamber Menu
hamWrap.addEventListener('click', function () {
  hamburger.classList.toggle('close');
  nav.classList.toggle('reveal-nav');
  menu.classList.toggle('reveal-items');
  menuInfo.classList.toggle('reveal-items');
});

// Scroll Event
const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}