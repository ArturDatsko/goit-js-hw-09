const button = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let interval;
button.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonState = () => {
  button.start.disabled = !button.start.disabled;
  button.stop.disabled = !button.stop.disabled;
};

const runColorize = () => {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonState();
};

const stopColorize = () => {
  clearInterval(interval);
  buttonState();
};

button.start.addEventListener('click', runColorize);
button.stop.addEventListener('click', stopColorize);
