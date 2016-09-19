function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] += changeValue
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] += changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i++) {

    if (array[i].hasOwnProperty(findFn)) {
      return findFn
    }
  }
  return null
}
