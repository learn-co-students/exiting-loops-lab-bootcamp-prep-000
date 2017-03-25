function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) { break; }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) { continue; }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, fnFind) {
  for (var i = 0; i < array.length; i++) {
    var cur = array[i];
    if (fnFind(cur)) { return cur; }
  }
  return null;
}