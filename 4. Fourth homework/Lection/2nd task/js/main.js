A = [5, 8, 2, 4, 7, 6, 14, 8, 1, 0];
minElemValue = A[0];

for(i = 0; i < A.length; i +=2){
  if(minElemValue > A[i]){
    minElemValue = A[i];
  }
}

console.log(minElemValue);