const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const text = document.querySelector('.show-details');
const close = document.querySelector('.close');

// Когда пользователь нажимает на текст, отобразить модальное окно и запретить прокрутку страницы
text.addEventListener('click', () => {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});

// Когда пользователь нажимает на кнопку закрытия, скрыть модальное окно и восстановить прокрутку страницы
close.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

// Когда пользователь щелкает за пределами модального окна, закрыть его и восстановить прокрутку страницы
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
  }
});
