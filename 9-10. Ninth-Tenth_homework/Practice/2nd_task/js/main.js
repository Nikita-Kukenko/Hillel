var str = 'var_text_hello';
var arrStr = str.split('_');
var strResult = '';

for(var i = 0; i < arrStr.length; i++) {
  var item = arrStr[i];

  if(i === 0) {
    var leftOvers = item.substring(0);
    strResult += leftOvers;
  } else {
    var firstItemElem = item.substring(0, 1).toUpperCase();
    var leftOvers = item.substring(1);
    strResult += firstItemElem + leftOvers;
  }
}

// OR

var str = 'var_text_hello';
var arrStr = str.split('_');

function arrModification(item, index){
  if(index === 0) {
        return item;
      } else {
        var firstItemElem = item.substring(0, 1).toUpperCase();
        var leftOvers = item.substring(1);
        return firstItemElem + leftOvers;
      }
}

var strResult = arrStr.map(arrModification).join('');

console.log(strResult);