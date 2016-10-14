function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
      }
    else{
      break;
    }
  }
  return array;
}

//breakOut(array, changeValue, stopValue) which iterates through array and changes
//every element to changeValue until the loop reaches stopValue. Then we break out
//of the loop and return the array.

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
      }
  }
  return array;
}


//keepGoing(array, changeValue, skipValue) which iterates through array and changes
//every element to changeValue except those that match skipValue. Then return the array.

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  
  }
}
//findBy(array, findFn) which looks for a value in array based on the return value of findFn.
//Return null if the value isn't found.
