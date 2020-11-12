const square = document.querySelector('.square-traveler');
const face = document.querySelector('.face');
const field = document.querySelector('.field');

console.dir(square);
console.dir(face);
console.dir(field);

document.addEventListener('keydown', function(event) {
  const positionLeft = square.offsetLeft;
  const fieldWidth = field.offsetWidth;

  if (event.code == 'Space') {
      square.style.bottom = '50px';
      document.addEventListener('keyup', (event) => {
        square.style.bottom = '0px';
    });
  } else if (event.code == 'ArrowRight') {
      square.style.left = (positionLeft <= (fieldWidth - 120)) ? `${positionLeft + 20}px` : `${fieldWidth - 100}px`;
  } else if (event.code == 'ArrowLeft') {
      square.style.left = (positionLeft >= 20) ? `${positionLeft - 20}px` : `${0}px`;
  } else if (event.code == 'ControlLeft') {
      square.style.height = `${60}px`;
      square.style.width = `${115}px`;
      face.style.top = `${9}px`;
      face.style.left = `${45}px`;
      document.addEventListener('keyup', (event) => {
        square.style.height = `${100}px`;
        square.style.width = `${100}px`;
        face.style.top = `${38}px`;
        face.style.left = `${38}px`;
    });
  }

});