size = 5;
array = new Array(size);

minNum = -42;
maxNum = 38;

minElemValue = maxNum;
elemArrayIndex = 0;
minElemValueIndex = 0;

for(i = 0; i < size; i++) {
  array[i] = new Array(size);

  for(j = 0; j < size; j++){
    array[i][j] = Math.round(Math.random() * (maxNum - minNum) + minNum);
    elemValue = array[i][j];

    if(minElemValue > elemValue){
      minElemValue = elemValue;
      elemArrayIndex = i;
      minElemValueIndex = j;
    }
  }
}

swap = array[elemArrayIndex][0];
array[elemArrayIndex][0] = array[elemArrayIndex][minElemValueIndex];
array[elemArrayIndex][minElemValueIndex] = swap;