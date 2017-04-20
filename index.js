function breakOut(array, changeValue, stopValue) {
  for (var element in array) {
    if (element === stopValue) {
      break;
    }
    element = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var element in array) {
    if (element === stopValue) {
      continue;
    }
    element = changeValue
  }
  return array
}

findBy(array, findFn) {
  for (var element in array) {
    if (element === findFn) {
      return element
    }
  }
  return null
}
