var data = {
  addRecord: function(){
    var flag = (arguments[arguments.length - 1] == true) ? true : false;
    
    for(var i = 0; i < arguments.length; i++) {
      if(typeof(arguments[i]) === 'object') {
        item = arguments[i];
        for(var key in item) {
          if(data[key] !== undefined && flag === true) {
            continue;
          } else {
            data[key] = item[key];
          }
        }
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50,
}

data.addRecord({x: 10}, {y: 20}, {z: 30, str2: 'Work'}, true);

console.log(data);