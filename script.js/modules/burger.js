import {navMenu, orderCall, headerWrapper, header} from './header.js';

let startTime = NaN;
let down = 0;
const durationDown = 300;
const durationOpacity = 1000;

const stepDownWideWindow = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationDown;
  down = navMenu.scrollHeight * progress;
  navMenu.style.height = `${down}px`;
  if (progress < 1) {
    requestAnimationFrame(stepDownWideWindow);
  } else {
    startTime = NaN;
  }
};

const stepOpacity = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationOpacity;
  headerWrapper.style.opacity = progress;
  if (progress < 1) {
    requestAnimationFrame(stepOpacity);
  } else {
    startTime = NaN;
  }
};

const stepDownNarrowWindow = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationDown;
  down = (navMenu.scrollHeight + headerWrapper.scrollHeight) * progress;
  navMenu.style.height = `${down}px`;
  if (progress < 1) {
    requestAnimationFrame(stepDownNarrowWindow);
  } else {
    startTime = NaN;
    headerWrapper.style.transform =
      `translate(calc(50% - ${orderCall.scrollWidth}px / 2),
      ${navMenu.scrollHeight + header.scrollHeight}px)`;
    headerWrapper.style.zIndex = 1000;
    requestAnimationFrame(stepOpacity);
  }
};

export default {
  stepDownWideWindow,
  stepOpacity,
  stepDownNarrowWindow,
};

