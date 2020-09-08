array = new Array(40);

max = 20;
min = -20;

for(i = 0, sum = 0 ; i < array.length ; i++) {
  arrayItems = Math.round(Math.random() * (max - min) + min);
  array[i] = arrayItems;

  console.log(array[i]);

  if(arrayItems > 0 && arrayItems % 2 == 0) {
    sum += arrayItems;
  }
}

array[array.length] = 0;

console.log(array, 'array');
console.log(sum, 'sum');