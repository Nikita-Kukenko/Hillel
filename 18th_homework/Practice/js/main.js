const rangeInput = document.querySelector('.range');
const numberInput = document.querySelector('.number');
const redPointer = document.querySelector('.red-pointer');
const greenPointer = document.querySelector('.green-pointer');

rangeInput.oninput = e => {
  numberInput.value = e.target.value;
  progressBar(e.target.value);
}

numberInput.oninput = e => {
  rangeInput.value = e.target.value;
  progressBar(e.target.value);
}

const percentValue = (x, value) => (x * value) / 100;

const progressBar = value => {
  let result = 0;

  if(value <= 20) {
    result = percentValue(2, value);
  } else if(value > 20 && value <= 50) {
    result = percentValue(4, value);
  } else if(value > 50 && value <= 75) {
    result = percentValue(6, value);
  } else if(value > 75) {
    result = percentValue(8, value);
  }

  redPointer.style.height = `${result}px`;
  greenPointer.style.height = `${value}px`;
}