size = 10;
array = new Array(size);

minNum = 1;
maxNum = 100;

for(i = 0; i < size; i++) {
  arrayItem = Math.round(Math.random() * (maxNum - minNum) + minNum);
  array[i] = arrayItem;
}

console.log(array, 'array');

for (j = 0; j < size; j++) {
  lastElem = array.pop();

  array.splice(j, 0, lastElem);
}

console.log(array, 'reverse array');