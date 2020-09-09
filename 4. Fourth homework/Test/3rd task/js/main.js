array = [1, 2, 3, 4, 5, 6, 7];
result = array.length / 2;


if((array.length % 2) === 0) {
  array.splice(result - 1, 2);
} else {
  rounding = Math.ceil(result);
  array.splice(rounding - 1, 1);
}

console.log(array);