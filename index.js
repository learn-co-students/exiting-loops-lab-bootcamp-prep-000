/*
breakOut(array, changeValue, stopValue)
iterates through array and changes every element to changeValue until the loop reaches stopValue.
Then we break out of the loop and return the array.


keepGoing(array, changeValue, skipValue)
iterates through array and changes every element to changeValue except those that match skipValue.
Then return the array.


findBy(array, findFn)
looks for a value in array based on the return value of findFn.
Return null if the value
*/

function breakOut (array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
     if (array[i] === stopValue) {
     	break;
     }
     array[i] = changeValue
  }
 return array
}

// function breakOut (array, changeValue, stopValue) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] = changeValue;
//      if (array[i] === stopValue) {
//       break;
//     }
//     return array;
//   }
// }

function keepGoing (array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy (array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
