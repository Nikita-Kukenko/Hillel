function loop(array, i) {
  i = i || 0;

  if (array.length == i) {
      return false;
  }

  loop(array, i + 1);
  console.log(array[i]);

}


loop([1, 2, 3, 4, 5]);