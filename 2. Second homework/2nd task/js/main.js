
enterTheNumber = +prompt('Enter the number', '');

if (!enterTheNumber) {

  do {
    alert('False');
    alert('Try again');
    enterTheNumberAgain = +prompt('Enter the number', '');
  } while (!enterTheNumberAgain);

}

alert('True');