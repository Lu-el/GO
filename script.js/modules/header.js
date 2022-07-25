import burgerAnimation from './burger.js';
const {
  stepDownWideWindow,
  stepDownNarrowWindow,
} = burgerAnimation;

export const navMenu = document.querySelector('.navigator');
const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
export const orderCall = document.querySelector('.header__btn');
const modalWindow = document.querySelector('.modal');
const mainPage = document.querySelector('.main');
const footer = document.querySelector('.footer');
export const headerWrapper = document.querySelector('.header__wrapper');
export const header = document.querySelector('.header');


orderCall.addEventListener('click', () => {
  modalWindow.classList.remove('visually-hidden');
  mainPage.classList.add('mask');
  footer.classList.add('mask');
});

const closeMenu = () => {
  navMenu.style.height = '';
  navMenu.classList.remove('navigator_active');
  headerWrapper.classList.remove('wrapper-active');
  mainPage.classList.remove('mask');
  footer.classList.remove('mask');
};

const toggleBurger = () => {
  burgerOpen.classList.toggle('visually-hidden');
  burgerClose.classList.toggle('visually-hidden');
};

const resetHeaderWrapper = () => {
  headerWrapper.style.transform = '';
  headerWrapper.style.zIndex = '';
  headerWrapper.style.opacity = '';
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.header__btn')) {
    return;
  }
  if (e.target.closest('.burger')) {
    if (burgerOpen.classList.contains('visually-hidden')) {
      toggleBurger();
      closeMenu();
      resetHeaderWrapper();
    } else {
      toggleBurger();
      mainPage.classList.add('mask');
      footer.classList.add('mask');
      if (document.documentElement.clientWidth <= 600) {
        requestAnimationFrame(stepDownNarrowWindow);
      } else {
        requestAnimationFrame(stepDownWideWindow);
      }
    }
    return;
  }
  if (!(e.target.closest('.modal__box')) ||
    e.target.closest('.modal__btn-close')) {
    if (burgerOpen.classList.contains('visually-hidden')) {
      toggleBurger();
      resetHeaderWrapper();
    }
    closeMenu();
    modalWindow.classList.add('visually-hidden');
  }
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth >= 880) {
    navMenu.style.height = '';
    mainPage.classList.remove('mask');
    footer.classList.remove('mask');
    if (burgerOpen.classList.contains('visually-hidden')) {
      toggleBurger();
    }
  } else {
    resetHeaderWrapper();
  }
});
