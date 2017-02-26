function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {
      return array
    }
    array[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}
//`findBy(array, findFn)` which looks for a value in `array`
// based on the return value of `findFn`.
// Return `null` if the value isn't found.

var findBy = (array, findFn) => {
  for(var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}