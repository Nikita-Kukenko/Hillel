var arr = [1, 2, 3, 4, 5];

function myPush(a) {
    return this[this.length] = a;
}

arr.myPush = myPush;
arr.myPush(1);

console.log(arr);

function myJoin(a) {
    for(var i = 0; i < this.length - 1; i++) {
        document.write(this[i] + a);
    }

    document.write(this[i]);
}

arr.myJoin = myJoin;
arr.myJoin('_');

function myReverce() {
    for (var i = 0; i < this.length; i++) {
        lastElem = this.pop();
      
        this.splice(i, 0, lastElem);
      }
}

arr.myReverce = myReverce;
arr.myReverce();
console.log(arr);