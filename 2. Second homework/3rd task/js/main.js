enterLogin = prompt('Who are you?', '');

if (!enterLogin) {
  alert('Entry canceled');
} 

if (enterLogin !== 'Admin') {
  alert('I do not know you!');
} else if (enterLogin == 'Admin') {
  enterPass = prompt('Password?', '');
  if (enterPass == 'Black Overlord') {
    alert('Welcome!');
  } else if (!enterPass) {
    alert('Entry canceled');
  } else {
    alert('Password wrong!');
  }
}