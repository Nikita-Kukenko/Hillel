function SuperMath() {
  this.check = function(obj){
      console.log(this);
      var askUser = confirm('Выполнить действие?');
      if(askUser) {
          var result = this.toDo(obj.X, obj.Y, obj.sign);
      } else {
          var newX = prompt('Введите значение X', '2');
          var newY = prompt('Введите значение Y', '2');
          var newSign = prompt('Введите значение Sign', '+');
          var result = this.toDo(newX, newY, newSign);
      }
      
      console.log(result);
  }
}

SuperMath.prototype.toDo = function(x, y, sign){
  if(sign == '+') {
      return (+x + +y);
    } else if(sign == '-') {
      return x - y;
    } else if(sign == '*') {
      return x * y;
    } else if(sign == '/') {
      return x / y;
    } else if(sign == '%') {
      return x % y;
    }
}

var p = new SuperMath();
var obj = {
  X:12,
  Y:3,
  sign: '/'
}

p.check(obj);