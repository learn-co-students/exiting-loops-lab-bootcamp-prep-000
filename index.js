var breakOut = function(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  } return array;
}

var keepGoing = function(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] === skipValue)) {
      array[i] = changeValue;
    } else {
      continue;
    }
  }
  return array;
}



findBy = function(array, findFn) {
  var location = array.indexOf(findFn)
  if (location === -1) {
    return null;
  } else {
    return location;
  }
}
