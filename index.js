function breakOut(array, changeValue, stopValue){
   for(var i = 0; i < array.length; i++){ // for(starting point, condition, incrementation){ logic }
     // array[index]
     if (array[i] == stopValue){
       break
     }
     array[i] = changeValue;
   } // end of the for loop
   return array;
}

const keepGoing = (array, changeValue, skipValue) => {
  for (var i = 0; i < array.length; i++){
    if(array[i] == skipValue)
      continue;
    array[i] = changeValue;
  }
  return array;
}

//function keepGoing(array, changeValue, skipValue){
//   for(var i = 0; i < array.length; i++){ // for(starting point, condition, incrementation){ logic }
//     // array[index]
//     if (array[i] == skipValue){
//       continue
//     }
//     array[i] = changeValue;
//   } // end of the for loop
//   return array;
// }

function findBy(array, findFn) {
  for(var i = 0; i < array.length; i++){
    if (findFn(array[i])){
      return array[i]
    }
  }
}
