
function getInputValue() {
  const inputElems = document.querySelectorAll('.input-wrapper input');
  const textareaElem = document.querySelector('.input-wrapper textarea');

  inputElems.forEach(item => {
    item.value && (textareaElem.value += `${item.value}, `);
    item.value = '';
  });
}

setInterval(getInputValue, 5000);