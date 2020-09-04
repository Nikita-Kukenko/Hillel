n = +prompt('Enter number', '');

if (n === 1 || n === 2) {
  alert('True');
}

for (i=2; i <= n; i++) {
  if (n % i === 0) {
    alert('False');
    break;
  }
}

if (n === i){
  alert('True');
}