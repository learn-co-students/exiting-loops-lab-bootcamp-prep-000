
//breakOut(array, changeValue, stopValue) which iterates through array and
// changes every element to changeValue until the loop reaches stopValue.
// Then we break out of the loop and return the array.
function breakOut(array, changeValue, stopValue) {
  for (var i = 0 ;i < array.length; i++) {
    if(array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

//keepGoing(array, changeValue, skipValue)
// which iterates through array and changes every element to changeValue except those that match skipValue.
// Then return the array.
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0 ;i < array.length; i++) {
    //if array item equals skipValue ,
    if(array[i] === skipValue) {
      //continue,
      continue
    }
    //and change the other values (items) in the array to changeValue
    array[i] = changeValue
  }
      return array // return array
}

//findBy(array, findFn) which looks for a value in array based on the return value of findFn.
// Return null if the value isn't found.
function findBy(array, findFn) {
  for (var i = 0 ;i < array.length; i++) {
    //looks for findFn in the array items
    if(findFn(array[i])) {
      //returns the array item
      return array[i]
    }
    }
  }
