function deleteSomeElem(array, delElem) {
  array = array.split('');

  result = array.filter(function(item) {
    newArr = [];

    for(i = 0; i < delElem.length; i++) {

     if(item !== delElem[i]) {
      newArr.push(item);
     } 
    }
    
    return newArr.length === delElem.length;
  })

  return result = result.join('');

}

console.log(deleteSomeElem('Hello world!', ['l', 'd']));