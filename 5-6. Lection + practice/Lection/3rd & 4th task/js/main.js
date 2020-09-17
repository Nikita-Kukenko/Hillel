function sum(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

function mul(a, b) {
  return a * b;
}

function pow(a, b) {
  return a ** b;
}

function getResult (a, b, func) {
  result = func(a, b);

  return result;
}

console.log(getResult(5, -8, mul));