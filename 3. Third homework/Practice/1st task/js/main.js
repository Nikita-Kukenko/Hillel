size = 20;
A = new Array(size);
max = 40;
min = 1;

for(i = 0; i < size; i++){
  itemA = Math.round(Math.random() * (max - min) + min);
  A[i] = itemA;

  if (i % 2 !== 0) {
    A[i] = 0;
  }
}

console.log(A, 'A');