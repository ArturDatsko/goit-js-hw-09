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

const runColorize = () => {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  button.start.disabled = true;
  button.stop.disabled = false;
};

const stopColorize = () => {
  clearInterval(interval);
  button.start.disabled = false;
  button.stop.disabled = true;
};

button.start.addEventListener('click', runColorize);
button.stop.addEventListener('click', stopColorize);
