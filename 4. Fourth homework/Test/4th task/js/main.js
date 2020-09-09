A = [1, 2, 3];

for(i = 0; i < A.length; i++){
  enteredData = prompt('Enter data', '');
  if(enteredData === '&') {
    break;
  } else {
    A.push(enteredData);
  }
}