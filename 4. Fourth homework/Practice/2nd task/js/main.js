size = 9;
array2D = new Array(size);
minResult = 0;
maxResult = 0;
minResultIndex = 0;
maxResultIndex = 0;

for( i = 0; i < array2D.length; i++) {
  array2D[i] = new Array(size);

  for (j = 0, sum = 0; j < array2D[i].length; j++) {
    array2D[i][j] = Math.ceil(Math.random() * 9);
    sum += array2D[i][j];
    if(i === 0) {
      minResult = sum;
    }
  }

  if(sum > maxResult) {
    maxResult = sum;
    maxResultIndex = i;
  }

  if(minResult > sum) {
    minResult = sum;
    minResultIndex = i;
  }

}

indexItem = array2D[minResultIndex];
array2D[minResultIndex] = array2D[maxResultIndex];
array2D[maxResultIndex] = indexItem;

console.log(minResult);
console.log(array2D);