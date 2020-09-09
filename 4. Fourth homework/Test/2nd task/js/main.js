array = [6, 7, 2, 3, 5, 7];

document.write('<ul>');

for(i = 0; i < array.length; i++) {
  document.write('<li>' + array[i] + '</li>');
}

document.write('</ul>');

// 2nd option

document.write('<ul>');
array.map(item => document.write('<li>' + item + '</li>'));
document.write('</ul>');