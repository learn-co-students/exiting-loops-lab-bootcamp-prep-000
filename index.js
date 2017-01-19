function breakOut(array, changeValue, stopValue) {
  //iterates through array and changes every element to changeValue until the
  //loop reaches stopValue. Then we break out of the loop and return the array.
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue ) {
      break
    }
    array[i] = changeValue
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  //iterates over array, change every element to changeValue unless match
  //skipValue
  for (let i = 0, l = array.length; i < l; i++ ) {
    if (array[i] === skipValue) { //first define what want to skip
      continue
    }
    array[i] = changeValue
  }
  return array
}


function findBy(array, findFn) {
  //which looks for a value in array based on the return value of findFn
  //return null if value is not found
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i]) === true) {
      return array[i];
    }
  }
  return null
}
