const box = document.querySelector('.box');

box.onmousedown = function(event) {
  document.addEventListener('mousemove', goElem);
}

function moveElem (x, y) {
  box.style.left = `${x - (box.offsetWidth / 2)}px`;
  box.style.top = `${y - (box.offsetHeight / 2)}px`;
}

function goElem(event) {
  moveElem(event.pageX, event.pageY);
}

document.onmouseup = function() {
  document.removeEventListener('mousemove', goElem);
}