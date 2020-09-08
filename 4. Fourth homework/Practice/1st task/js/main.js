array = [1, 2, 3, 4, 5, 6, 7];
size = array.length;

for(i = 0; i < size - 1; i += 2) {
  indexItem = array[i];
  array[i] = array[i + 1];
  array[i + 1] = indexItem;
}

console.log(array);