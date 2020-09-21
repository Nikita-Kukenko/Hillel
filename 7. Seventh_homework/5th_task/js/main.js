array = new Array(new Array(4), new Array(3), 
        new Array(new Array(6), new Array(4)));

min = -50;
max = 50;

for(i = 0; i < array.length; i++) {

    for(j = 0; j < array[i].length; j++) {

      if(i === 2) {

        for(e = 0; e < array[i][j].length; e++) {
          array[i][j][e] = Math.ceil(Math.random() * (max - min) + min);
        } 

      } else {
        array[i][j] = Math.ceil(Math.random() * (max - min) + min);
      }
    }
}

console.log(array, 'array');