function breakOut(array, changeValue, stopValue) {
  for (var item = 0; item < array.length; item++) {
    if (array[item] === stopValue) {
      break
    }
    array[item] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var item = 0; item < array.length; item++) {
    if (array[item] === skipValue) {
      continue
    }
    array[item] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (var item = 0; item < array.length; item++) {
    if (findFn(array[item]) === true) {
      return array[item]
    }
  }
  return null
}
