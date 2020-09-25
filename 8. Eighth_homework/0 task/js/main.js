mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];

function convert(arr, newArr) {
  newMass = newArr || [];

  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      convert(arr[i], newMass)
    } else {
      newMass.push(arr[i]);
    }
  }

  return newMass;
}

console.log(convert(mass));