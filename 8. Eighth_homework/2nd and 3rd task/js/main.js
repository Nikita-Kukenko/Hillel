function assignObjects() {
  newObj = {};
  
  for(i = 0; i < arguments.length; i++) {
    item = arguments[i];
    for(var key in item) {
      newObj[key] = item[key];
    }
  }

  return newObj;
}

console.log(assignObjects({ x: 10, z: 20 }, { x: 20, y: 30 }, {name: 'Nikita', y: 5}));