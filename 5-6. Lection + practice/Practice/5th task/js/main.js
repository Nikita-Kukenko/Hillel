array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(x) {
  return x % 2 == 0;
}

function filter(array, func) {
  array2nd = [];

  for(i = 0; i < array.length; i++) {
    boolValue = func(array[i]);

    if(boolValue) {
      array2nd.push(array[i]);
    }
  }

  return array2nd;
}

console.log(filter(array, isEven));