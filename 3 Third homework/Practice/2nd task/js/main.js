array = new Array(4);

for(i = 0, size = array.length; i < size; i++) {
    do {
      arrayItem = +prompt('Input value');
    } while (arrayItem < 0 || !arrayItem && arrayItem !== 0);

    array[i] = arrayItem;
    console.log(array, 'array');

}

// смущает то что значение -0 записывает в array
// решить этот момент так и не смог