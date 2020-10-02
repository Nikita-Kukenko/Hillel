var str = 'var_text_hello';
var arrStr = str.split('_');
var strResult = '';

for(var i = 0; i < arrStr.length; i++) {
  var item = arrStr[i];

  if(i === 0) {
    var leftOvers = item.substring(0, item.length);
    strResult += leftOvers;
  } else {
    var firstItemElem = item.substring(0, 1).toUpperCase();
    var leftOvers = item.substring(1, item.length);
    strResult += firstItemElem + leftOvers;
  }
}

// OR

var str = 'var_text_hello';
var arrStr = str.split('_');

var arrResult = arrStr.map(function(item, index){
  if(index === 0) {
        var leftOvers = item.substring(0, item.length);
        return leftOvers;
      } else {
        var firstItemElem = item.substring(0, 1).toUpperCase();
        var leftOvers = item.substring(1, item.length);
        return firstItemElem + leftOvers;
      }
});

var strResult = arrResult.join('');

console.log(strResult);