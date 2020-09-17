function doMathFirst(x, sign, y) {
  
  if(sign == '+') {
    return x + y;
  } else if(sign == '-') {
    return x - y;
  } else if(sign == '*') {
    return x * y;
  } else if(sign == '/') {
    return x / y;
  } else if(sign == '%') {
    return x % y;
  } else if(sign == '^') {
    return x ^ y;
  } else {
    return 'Недопустимая операция';
  }
}

resultFirst = doMathFirst(10, '*', 4);
console.log(resultFirst);

// OR

function doMathSecond(x, sign, y) {
  
  if(sign == '+') {
    return sum(x, y);
  } else if(sign == '-') {
    return sub(x, y)
  } else if(sign == '*') {
    return mult(x, y)
  } else if(sign == '/') {
    return division(x, y)
  } else if(sign == '%') {
    return remOfDivision(x, y)
  } else if(sign == '^') {
    return bitExcl(x, y)
  } else {
    return 'Недопустимая операция';
  }
}

function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function remOfDivision(x, y) {
  return x % y;
}

function bitExcl(x, y) {
  return x ^ y;
}

resultSecond = doMathSecond(10, '^', 3);
console.log(resultSecond);

// OR

function doMathThird(x, sign, y) {
  concat = x + sign + y;
  return eval(concat);
}

resultThird = doMathThird(10, '*', 5);
console.log(resultThird);