function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (array[i] === stopValue) {
      return array
    }
    array[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
