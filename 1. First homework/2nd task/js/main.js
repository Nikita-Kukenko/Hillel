firstUserInfo = prompt('Введите возраст, Имя и Фамилию', '18 лет Юрий Иванов');
secondUserInfo = prompt('Введите возраст, Имя и Фамилию', '16 лет Дмитрий Кузьмин');
thirdUserInfo = prompt('Введите возраст, Имя и Фамилию', '19 лет Оксана Петрова');

console.log('**************');
console.log('Список студентов зарегестрировавшихся на вебинар:');
console.log('1. ' + firstUserInfo);
console.log('2. ' + secondUserInfo);
console.log('3. ' + thirdUserInfo);
console.log('-------------- Средний возраст студента: ' + ((parseInt(firstUserInfo) + parseInt(secondUserInfo) + parseInt(thirdUserInfo)) / 3) + ' --------------');
console.log('**************');