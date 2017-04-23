function breakOut(array, changeValue, stopValue) {
  var array = [1, 1, 1, 1, 2, 1, 1];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      array[i] = changeValue;
    } else {
      stopValue;
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== 2) {
      array[i] = changeValue;
    } else if (array[i] === 2) {
      continue;
    } else {
      break;
    }
  } return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    } else {
      return null; 
    }
  }
}
