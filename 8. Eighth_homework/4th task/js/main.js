function getPerson(userName, from, to) {
  obj = {
    name: userName, 
    age: Math.ceil(Math.random() * (to - from) + from)
  };
  return obj;
}



person1 = getPerson('Nikita', 1, 100);
person2 = getPerson('Valera', 1, 100);
person3 = getPerson('Igor', 1, 100);
person4 = getPerson('Igor', 1, 100);
person5 = getPerson('Alisa', 1, 100);

array = [person1, person2, person3, person4, person5];

function getEverageAge(mass) {
  count = 0;
  length = mass.length;
  for(var i = 0; i < length; i++) {
    person = mass[i];
    for(var key in person) {
      if(key === 'age') {
        count += person[key];
      }
    }
  }
  everageAge = count / length;
  return everageAge;
}

getEverageAge(array);

function getOldestPerson(arr) {
  maxAge = 0;
  maxAgeIndex = 0;

  for(var i = 0; i < arr.length; i++) {
    user = arr[i];
    for(var key in user) {
      if(key === 'age') {
        if(user[key] > maxAge) {
          maxAge = user[key];
          maxAgeIndex = i;
        }
      }
    }
  }

  oldestPerson = arr[maxAgeIndex];
  return oldestPerson;
}

getOldestPerson(array);

function getUniqueNameArray(arr) {
  nameArray = [];

  for(var i = 0; i < arr.length; i++) {
    user = arr[i];

    for(var key in user) {
      isUniqueName = key === 'name' && nameArray.indexOf(user[key]) === -1;
      if(isUniqueName) {
          nameArray.push(user[key]);
      }
    }
  }

  return nameArray;
}

getUniqueNameArray(array);