a = prompt('Enter number "a"', '');

do {
  b = prompt('Enter number "b" bigger than number "a"', '');
} while (b <= a);


for(; a <= b; a++) {
  if (a % 2 == 0) {
    squareEvenNum = a ** 2;
    console.log(squareEvenNum, 'square even numbers');
  }
}