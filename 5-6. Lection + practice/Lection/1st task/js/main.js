function getSum(a, b){
  count = 1;

  for(i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }

  return count;
}

console.log(getSum(1, 8, 14, 81, 9, 4));