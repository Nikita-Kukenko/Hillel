function SuperMath(X, Y, sign) {
  this.X = X;
  this.Y = Y;
  this.sign = sign;
  this.check = function(obj){
      var askUser = confirm('Выполнить действие?');
      if(askUser) {
          var result = obj.toDo(obj.X, obj.Y, obj.sign);
      } else {
          var newX = prompt('Введите значение X', '2');
          var newY = prompt('Введите значение Y', '2');
          var newSign = prompt('Введите значение Sign', '+');
          var result = obj.toDo(newX, newY, newSign);
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

var p = new SuperMath(5, 6, '*');
p.check(p);