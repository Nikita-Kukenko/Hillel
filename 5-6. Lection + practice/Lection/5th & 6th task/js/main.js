function mulTen(value) {
  return value * 10;
}

function copyArrey(list, func) {
  copyList = list.slice();

  if(func) {
    modifiedList = [];
    
    copyList.forEach(element => {
       modifiedList.push(func(element));
    });

    return modifiedList;
  }

  return copyList;
}

testArr = [1, 2, 3, 4, 5];

newArr = copyArrey(testArr, mulTen);
console.log(newArr);