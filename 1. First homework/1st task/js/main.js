F = prompt( 'Введите значение силы воздействия на тело', '');
m = prompt( 'Введите значение массы тела', '');
a = F / m;

console.log(a, 'a = F / m;');

document.write('<p style="margin: 0 0 20px">**************</p>');
document.write('Ускорение тела при силе F = ' + F + ', и массе m = ' + m + ' :');
document.write('<p style="margin: 20px 0">--------------------</p>');
document.write('a = ' + a);
document.write('<p style="margin: 20px 0">--------------------</p>');
document.write('end.');