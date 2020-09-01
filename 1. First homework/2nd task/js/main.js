firstUserInfo = prompt('Введите возраст', '18') + ' лет ' + prompt('Введите Имя', 'Юрий') + ' ' + prompt('Введите Фамилию', 'Иванов');
secondUserInfo = prompt('Введите возраст', '16') + ' лет ' + prompt('Введите Имя', 'Дмитрий') + ' ' + prompt('Введите Фамилию', 'Кузьмин');
thirdUserInfo = prompt('Введите возраст', '19') + ' лет ' + prompt('Введите Имя', 'Оксана') + ' ' + prompt('Введите Фамилию', 'Петрова');

console.log('**************');
console.log('Список студентов зарегестрировавшихся на вебинар:');
console.log('1. ' + firstUserInfo);
console.log('2. ' + secondUserInfo);
console.log('3. ' + thirdUserInfo);
console.log('-------------- Средний возраст студента: ' + ((parseInt(firstUserInfo) + parseInt(secondUserInfo) + parseInt(thirdUserInfo)) / 3) + ' --------------');
console.log('**************');