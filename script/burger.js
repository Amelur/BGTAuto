const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__list');
const body = document.querySelector('body');

document.addEventListener('click', menu);

function menu(event) {
  if (event.target.closest('.burger')) {
    body.classList.toggle('lock');
    burger.classList.toggle('burger_active');
    navMenu.classList.toggle('nav__list_active');
  }
  if (event.target.closest('.nav__item')) {
    console.log('dsds');
    body.classList.remove('lock');
    burger.classList.remove('burger_active');
    navMenu.classList.remove('nav__list_active');
  }
}
