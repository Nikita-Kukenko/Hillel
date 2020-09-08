size = 10;
A = new Array(size);
maxNum = 40;
minNum = 1;

for(i = 0; i < size; i++){
  itemA = Math.round(Math.random() * (maxNum - minNum) + minNum);
  A[i] = itemA;

}

minValue = A[0];
maxValue = A[0];

minValueIndex = 0;
maxValueIndex = 0;

for (i = 0; i < A.length; i++) {

  if (A[i] > maxValue) {
    maxValue = A[i];
    maxValueIndex = i;
  }

  if (minValue > A[i]) {
    minValue = A[i];
    minValueIndex = i;
  }
}

console.log(A, 'A');

B = A.slice([minValueIndex + 1], [maxValueIndex]);

console.log(B, 'B');