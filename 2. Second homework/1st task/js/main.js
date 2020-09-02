
countAllNumbers = 0;
countEvenNumbers = 0;

for (i = 1 ; i <= 150 ; i++) {
  countAllNumbers += i;

  if (i % 2 === 0) {
    countEvenNumbers += i;
  }
};

console.log(countAllNumbers, 'All numbers sum');
console.log(countEvenNumbers, 'Even numbers sum');
