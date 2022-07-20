const navigator = document.querySelector('.navigator');
const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
const orderCall = document.querySelector('.header__btn');
const modalWindow = document.querySelector('.modal');
const mainPage = document.querySelector('.main');
const footer = document.querySelector('.footer');
const headerWrapper = document.querySelector('.header__wrapper');
const header = document.querySelector('.header');

orderCall.addEventListener('click', () => {
  modalWindow.classList.remove('visually-hidden');
  mainPage.classList.add('mask');
  footer.classList.add('mask');
});

const closeMenu = () => {
  navigator.style.height = '';
  burgerOpen.classList.toggle('visually-hidden');
  burgerClose.classList.toggle('visually-hidden');
  navigator.classList.remove('navigator_active');
  headerWrapper.classList.remove('wrapper-active');
  mainPage.classList.remove('mask');
  footer.classList.remove('mask');
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.header__btn')) {
    return;
  }
  if (e.target.closest('.burger')) {
    if (burgerOpen.classList.contains('visually-hidden')) {
      closeMenu();
    } else {
      mainPage.classList.add('mask');
      footer.classList.add('mask');
      burgerOpen.classList.toggle('visually-hidden');
      burgerClose.classList.toggle('visually-hidden');
      navigator.classList.add('navigator_active');
      headerWrapper.classList.add('wrapper-active');
      navigator.style.height = `${navigator.scrollHeight}px`;
      headerWrapper.style.top =
        `${navigator.scrollheight + header.scrollheight}px`;
    }
    return;
  }
  if (!(e.target.closest('.modal')) ||
    e.target.closest('.modal__btn-close')) {
    closeMenu();
    modalWindow.classList.add('visually-hidden');
  }
});
