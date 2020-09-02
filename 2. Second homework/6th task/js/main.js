n = +prompt('Enter number', '');

if (n === 1) {
  alert('True');
}

for (i=2; i <= n; i++) {
  if (n !== 2 && n % i === 0 && i !== n) {
    alert('False');
    break;
  } else if (n === i){
    alert('True');
  }
}