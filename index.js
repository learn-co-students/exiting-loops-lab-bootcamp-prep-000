function breakOut(array, changeValue, stopValue) {
  //changes every element in array to changeValue until it reaches stopValue
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
    }
    return array
}
function keepGoing(array, changeValue, skipValue) {
  //changes every element in array to changeValue unless the element === skipValue
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}
function findBy(array, findFn) {
  //finds the value that satisfies findFn
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}