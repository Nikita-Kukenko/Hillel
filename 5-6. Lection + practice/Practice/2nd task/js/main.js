function compareMaxSumArr() {
  maxI = 0;
  max = 0;

  for(i = 0; i < arguments.length; i++) {
     maxSum = sum(arguments[i]);

     if (i == 0) {
        max = maxSum;
        maxI = i;
     }

     if (maxSum > max) {
        max = maxSum;
        maxI = i;
     }
  }

  return arguments[maxI];
}


function sum(arr) {
  sumElements = 0;

  for(j = 0; j < arr.length; j++) {
     item = arr[j];

     if (isNumber(item)) {
        sumElements += item;
     }
  }

  return sumElements;
}

function isNumber(value) {
  return !isNaN(value)
}

console.log(compareMaxSumArr([1, 2 , 3], [10 , 12, 13], [4, 5 ,6]));