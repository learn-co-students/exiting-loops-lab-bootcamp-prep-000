function breakOut(array, changeValue, stopValue)  {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

/***which iterates through array and changes every element to changeValue until the loop reaches stopValue. Then we break out of the loop and return the array.***/

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

/***which iterates through array and changes every element to changeValue except those that match skipValue. Then return the array.***/

function findBy(array, findFn) {
  for(var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null;
}

/***which looks for a value in array based on the return value of findFn. Return null if the value isn't found.***/
