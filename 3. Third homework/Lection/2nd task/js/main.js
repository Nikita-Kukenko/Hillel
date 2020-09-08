array = new Array(30);

max = 5;
min = -5;

A = [];
B = [];

for(i = 0 ; i < array.length ; i++) {
  arrayItems = Math.round(Math.random() * (max - min) + min);
  array[i] = arrayItems;

  if(arrayItems > 0) {
    A[A.length] = arrayItems;
  }

  if(arrayItems < 0) {
    B[B.length] = arrayItems;
  }
}

console.log(A, 'A');
console.log(B, 'B');

min = A[0];
max = A[0];

minJ = 0;
maxJ = 0;

for (j = 0;  j < A.length; j++) {
  console.log(A[j], 'j');

  if (A[j] > max) {
    max = A[j];
    maxJ = j;
  }

  if (min > A[j]) {
    min = A[j];
    minJ = j;
  }
}

console.log(A, 'A');
console.log(min, max, 'min, max');
console.log(minJ, maxJ, 'minJ, maxJ');

// Не могу найти способ
// поменять значения min и max местами в массиве