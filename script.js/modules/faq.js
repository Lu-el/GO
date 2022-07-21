const questions = document.querySelectorAll('.question__item');
const questionTitles = document.querySelectorAll('.question__title');
const textWrapper = document.querySelectorAll('.question__text-wrapper');

let heightWrapper = 0;

const getMaxHeight = () => {
  textWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
      heightWrapper = elem.scrollHeight;
    }
  });
};

getMaxHeight();

questionTitles.forEach((title, indexQuest) => {
  title.addEventListener('click', () => {
    for (let i = 0; i < questions.length; i += 1) {
      if (indexQuest === i) {
        textWrapper[i].style.height =
          questions[i].classList.contains('question__item_active') ?
          '' : `${heightWrapper}px`;
        questions[i].classList.toggle('question__item_active');
      } else {
        questions[i].classList.remove('question__item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});

window.addEventListener('resize', () => {
  heightWrapper = 0;
  getMaxHeight();
});
