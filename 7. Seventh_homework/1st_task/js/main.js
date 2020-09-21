function loop(array, e) {
  i = e || 0;

  if (array.length == i) {
      return false;
  }
  console.log(array[i]);
  loop(array, i + 1);
}


loop([1, 2, 3, 4]);