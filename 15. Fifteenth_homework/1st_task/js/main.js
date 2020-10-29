class Field {
  constructor(width = 10, height = 10) {
    let array = new Array(height);
    for(let i = 0; i < height; i++) {
      array[i] = new Array(width);
    
      for(let j = 0; j < width; j++){
        array[i][j] = 0;
      }
    }
    let obj = {array}
    obj.__proto__ = Field;
    return obj;
  }
}

Field.renderField = function() {

  /* 
  альтернативный вариант, но с запятыми получается

  document.write(`<div style="text-align: center;">`);
  document.write(`<hr />`);
  document.write(`${this.array.join('<br />')}`);
  document.write(`<hr />`);
  document.write(`</div>`);
  */
  
  document.write(`<div style="text-align: center;">`);
  document.write(`<hr />`);

  for(let i = 0, height = this.array.length; i < height; i += 1) {
    for(let j = 0, width = this.array[i].length; j < width; j += 1) {
      let item = this.array[i][j];
      let check = (j === (width - 1));
      if(check){
        document.write(`${item}<br>`);
      } else {
        document.write(`${item}` + ' ');
      }
    }
  }

  document.write(`<hr />`);
  document.write(`</div>`);
}

Field.clearField = function(pers) {
  this.array[pers.XPosition][pers.YPosition] = 0;
  this.array[pers.saveXPosition][pers.saveYPosition] = 0;
}

Field.changeSize = function(newX, newY) {
  this.array = new Array(newX);
    for(let i = 0; i < newX; i++) {
      this.array[i] = new Array(newY);
    
      for(let j = 0; j < newY; j++){
        this.array[i][j] = 0;
      }
    }
}


let field = new Field();

class Person {
  constructor(name, XPosition, YPosition){
    this.name = name;
    this.XPosition = XPosition;
    this.YPosition = YPosition;
  }

  start(obj) {
    this.saveXPosition = this.XPosition;
    this.saveYPosition = this.YPosition;
    obj.array[this.XPosition][this.YPosition] = 1;
  }

  go(direction, step, obj) {

    /*
      если в результате выполнения (this.XPosition || this.YPosition += || -= step) === -1,
      добавляет к массиву ещё один элемент, не придумал как это исправить.
    */

    switch(direction) {
      case 'left':
        obj.array[this.XPosition][this.YPosition] = 0;
        this.YPosition -= step;
        obj.array[this.XPosition][this.YPosition] = 1;
        break;
      case 'right':
        obj.array[this.XPosition][this.YPosition] = 0;
        this.YPosition += step;
        obj.array[this.XPosition][this.YPosition] = 1;
        break;
      case 'top':
        obj.array[this.XPosition][this.YPosition] = 0;
        this.XPosition -= step;
        obj.array[this.XPosition][this.YPosition] = 1;
        break;
      case 'bottom':
        obj.array[this.XPosition][this.YPosition] = 0;
        this.XPosition += step;
        obj.array[this.XPosition][this.YPosition] = 1;
        break;
      default:
        break;
    }
  }

  resetPosition(obj) {
    obj.array[this.XPosition][this.YPosition] = 0;
    obj.array[this.saveXPosition][this.saveYPosition] = 1;
  }
}

let person = new Person('Arch', 5, 7);