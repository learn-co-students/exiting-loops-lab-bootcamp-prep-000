function breakOut(array, changeValue, stopValue) {
  for(var i in array) {
    if (array[i] == stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i in array) {
    if (array[i] == skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for(var elem of array) {
    if (findFn(elem)) return elem;
  }
  return null
}
