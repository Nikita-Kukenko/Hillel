size = 9;
array2D = new Array(size);

for( i = 0; i < array2D.length; i++) {
  array2D[i] = new Array(size);

  for (j = 0; j < array2D[i].length; j++) {
    array2D[i][j] = Math.ceil(Math.random() * 9);
  }

  value = array2D[i].reduce((sum, current) => sum + current, 0);

  minResult = array2D[0].reduce((sum, current) => sum + current, 0);
  maxResult = array2D[0].reduce((sum, current) => sum + current, 0);

  minResultIndex = 0;
  maxResultIndex = 0;

  if(value > maxResult) {
    maxResult = value;
    maxResultIndex = i;
  }

  if(minResult > value) {
    minResult = value;
    minResultIndex = i;
  }

}

indexItem = array2D[minResultIndex];
array2D[minResultIndex] = array2D[maxResultIndex];
array2D[maxResultIndex] = indexItem;