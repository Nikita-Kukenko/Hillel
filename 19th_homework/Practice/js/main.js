const square = document.querySelector('.square-traveler');
const face = document.querySelector('.face');
const field = document.querySelector('.field');


const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const squareWidth = square.offsetWidth;
let positionLeft = square.offsetLeft;
let positionTop = square.offsetTop;

let h = 50;
let step = 20;

function check(e, direction, value) {
  if(!e.ctrlKey || e.code == 'ArrowRight' || e.code == 'ArrowLeft') {
    square.style[direction] = `${value}px`;
    if(direction == 'top') {
      positionTop = value;
    } else {
      positionLeft = value;
    };
  }

  if(e.ctrlKey
      && e.code != 'Space'
      && e.code != 'ArrowRight'
      && e.code != 'ArrowLeft'
      && e.code != 'ArrowUp'
      && e.code != 'ArrowDown'){
    square.style.top = `${value}px`;
  }
}

document.addEventListener('keydown', function(event) {

  switch (event.code) {
    case 'Space':
      let jump = positionTop - h;
      !event.repeat && check(event, 'top', jump);
      break;
    case 'ArrowRight':
      let goRight;
      if(positionLeft <= (fieldWidth - (squareWidth + step))){
        goRight = positionLeft + step;
      } else {
        goRight = fieldWidth - squareWidth;
      }
      !event.repeat && check(event, 'left', goRight);
      break;
    case 'ArrowLeft':
      let goLeft;
      if(positionLeft >= step) {
        goLeft = positionLeft - step;
      } else {
        goLeft = 0;
      }
      !event.repeat && check(event, 'left', goLeft);
      break;
    case 'ArrowUp':
      let goUp;
      if(positionTop >= step) {
        goUp = positionTop - step;
      } else {
        goUp = 0;
      }
      !event.repeat && check(event, 'top', goUp);
      break;
    case 'ArrowDown':
      let goDown;
      if((positionTop + squareWidth) >= fieldHeight) {
        goDown = positionTop;
      } else {
        goDown = positionTop + step;
      }
      !event.repeat && check(event, 'top', goDown);
      break;
    case 'ControlLeft': 
    case 'ControlRight':
      if(!event.repeat) {
        let sitDown = positionTop + 40;
        square.style.height = `${60}px`;
        square.style.width = `${115}px`;
        face.style.top = `${9}px`;
        face.style.left = `${45}px`;
        check(event, 'top', sitDown);
      }
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.code) {
    case 'Space' :
      let down = positionTop + h;
      check(event, 'top', down);
      break;
    case 'ControlLeft':
    case 'ControlRight':
      square.style.height = `${100}px`;
      square.style.width = `${100}px`;
      face.style.top = `${38}px`;
      face.style.left = `${38}px`;
      check(event, 'top', positionTop);
      break;

  }
});