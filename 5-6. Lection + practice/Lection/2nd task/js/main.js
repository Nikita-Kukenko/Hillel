function getCentralElements() {
   centralArray = [];

   for(i = 0; i < arguments.length; i++) {
      cutItems = getCutItems(arguments[i]);
      centralArray = centralArray.concat(cutItems);
   }

   return centralArray;
}

function getCutItems(item) {
   count = item.length % 2 == 0? 2 : 1;
   position = Math.ceil(item.length / 2) - 1;
   return item.splice(position, count);
}

console.log(getCentralElements([1, 2, 3, 4], [5, 6, 7, 8, 9], [14, 2, 1, 5, 6]));