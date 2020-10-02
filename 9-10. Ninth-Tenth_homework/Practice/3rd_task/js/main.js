function inArray(item, arr) {

  var result = arr.some(function(elem){
    return elem.includes(item);
  });

  return result;
}

console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));