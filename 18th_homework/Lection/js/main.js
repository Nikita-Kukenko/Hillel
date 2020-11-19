const box = document.querySelector('.box');

function initDragAndDrop(item) {
  item.onmousedown = function() {
    document.addEventListener('mousemove', goElem);
  }
  
  function moveElem (x, y) {
    item.style.left = `${x - (item.offsetWidth / 2)}px`;
    item.style.top = `${y - (item.offsetHeight / 2)}px`;
  }
  
  function goElem(event) {
    moveElem(event.pageX, event.pageY);
  }
  
  document.onmouseup = function() {
    document.removeEventListener('mousemove', goElem);
  }
}

dragAndDrop(box);