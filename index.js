function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      return array
    } else {
      array[i] = changeValue
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if(findFn(array[i])) {
      return array[i]
    }
  }
} // passed all tests before writing anything for the case of returning null where the value isn't found
