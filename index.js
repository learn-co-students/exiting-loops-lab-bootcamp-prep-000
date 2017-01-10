function breakOut(array, changeValue, stopValue) {
  const b = array.length
  for (var i = 0; i < b; i++) {
    if (array[i] == stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}
function keepGoing(array, changeValue, skipValue) {
  const b = array.length
  for (var i = 0; i < b; i++) {
    if (array[i] == skipValue) {
      continue
    }
    array [i] = changeValue
  }
  return array
}
function findBy(array, findFn) {
  const b = array.length
  for (var i = 0; i < b; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
