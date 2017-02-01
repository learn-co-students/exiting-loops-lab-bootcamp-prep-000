function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findFn() {
  return Math.floor(Math.random() * 100)

}
function findBy(theArray, findFn) {
  for (var i = 0; i < theArray.length; i++) {
    if (findFn(theArray[i])) {
      return theArray[i]
    }
  }
  return null
}
