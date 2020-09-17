function randomFillingArray(length = 9, min = 0, max = 9) {
  array = new Array(length);

  for(i = 0; i < length; i++) {
    array[i] = Math.round(Math.random() * (max - min) + min);
  }

  return array;
}

someArray = randomFillingArray(10, 5, 99);
console.log(someArray);