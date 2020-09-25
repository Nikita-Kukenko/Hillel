objFirst = { 
  a: 10,
  b: 12,
  c: { 
    f: 13
  }
};


function convert(obj, newObj) {
  newObj = newObj || {};

  for(var key in obj) {
    if(typeof(obj[key]) === 'object' ) {
      convert(obj[key], newObj);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

console.log(convert(objFirst));