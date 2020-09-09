array = [1, 2, 3, 4, 5];

for(i = 0; i < array.length; i++) {
  document.write(array[i]);
  if(i !== array.length - 1) {
    document.write('_');
  }
}

// document.write('<br />');
// document.write(array.join('_'));