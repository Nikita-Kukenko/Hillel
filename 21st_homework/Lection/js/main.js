const form = document.querySelectorAll('form');
const clearButton = document.querySelector('.clear');
const setButton = document.querySelector('.set');

function clearCounters(element) {
  clearButton.addEventListener('click', function() {
    localStorage.clear();
    element.value = 0;
  });
}

function setCountersValue(items) {
  setButton.addEventListener('click', function(){
    const checkItem = prompt('Введите id', 'one');

    items.forEach((item) => {
      const itemId = item.id;

      if(itemId === checkItem) {
        const inputNode = document.querySelector(`#${itemId} .counter`)
        inputNode.value = prompt('Введите число');
        localStorage.setItem(inputNode.name, inputNode.value);
      }
    })
  });
}

function getCounterValue(element) {
  element.value = localStorage.getItem(element.name) || 0;
}

function handleChange(items) {
  [].forEach.call(items, (item) => {
      const id = item.id
      let counterElem = document.querySelector(`#${id} .counter`);
      let clickElem = document.querySelector(`#${id} .click`);

      clickElem.addEventListener('click', (event) => {
        event.preventDefault();
        counterElem.value++;
        localStorage.setItem(counterElem.name, counterElem.value);
      });

      getCounterValue(counterElem);
      clearCounters(counterElem);
  });

  setCountersValue(items);
}

handleChange(form);