enteredNumber = prompt('Enter number', '');
factorial = 1;

for (i = 1; i <= enteredNumber; i++) {
  factorial *= i;
}

console.log(factorial, 'n!');