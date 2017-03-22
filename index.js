function breakOut(array, changeValue, stopValue) {
  var newArray = [];
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      newArray.push(changeValue);
    }
    if (array[i] === stopValue) {
      array = array.slice(i, array.length);
      for (var j = 0; j < array.length; j++) {
        newArray.push(array[j]);
      }
      return newArray;
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      result.push(changeValue);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
