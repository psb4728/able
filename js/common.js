const hamburger = document.querySelector('.hamburger');
const hamWrap = document.querySelector('.toggle_wrap');
const nav = document.querySelector('nav'); 
const menu = document.querySelector('.menu');

hamWrap.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  nav.classList.toggle('reveal-nav');
  menu.classList.toggle('reveal-items');
});
