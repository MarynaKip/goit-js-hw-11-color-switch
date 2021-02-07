import { colors } from './colors.js';

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

let changeColorsInterval;

refs.start.addEventListener('click', onClickStart);

refs.stop.addEventListener('click', onClickStop);

function onClickStart(event) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  refs.start.setAttribute('disabled', 'disabled');

  changeColorsInterval = setInterval(() => {
    let randomColor = colors[randomIntegerFromInterval(0, 5)];
    document.body.style.background = randomColor;
  }, 1000);
}

function onClickStop(event) {
  clearInterval(changeColorsInterval);
  refs.start.removeAttribute('disabled');
}
