function sum(a, b) {
  return a + b;
};

function mul(a, b) {
  return a * b;
};

var obj = {
  copy: function(buffer) {
    this[buffer] = this.result;
    return this;
  },
  clear: function() {
    if(obj.property !== undefined) {
      this[this.property] = 0;
    } else {
      this.result = 0;
    }
    return this;
  },
  doFunction: function(func, x, y) {
    if(obj.property !== undefined) {
      this[this.property] = func(x, y);
    } else {
      this.result = func(x, y);
    }
    return this;
  },
  target: function(property) {
    this.property = property;
    this[property] = null;
    return this;
  }
}


obj.copy('Some_name').doFunction(mul, 5, 8).copy('copy').target('TEST').doFunction(sum, 6, 4).clear();
console.log(obj);