function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }

    if (array[i] === stopValue){
      break;
    }
  }

  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    }
  }

  return array;
}

function findBy(array, findFn) {
  var n = null;

  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      n = array[i];
    }
  }

  return n;
}
