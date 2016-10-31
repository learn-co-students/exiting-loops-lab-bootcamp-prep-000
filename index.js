function breakOut(array, changeValue, stopValue) {
  var i = 0;
  while(i < array.length) {
    if (array[i] === stopValue)
      break;
    array[i] = changeValue;
    i++;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  var index = 0;
  while(index < array.length) {
    if (array[index] === skipValue){
      index++;
      continue;
    }
    array[index] = changeValue;
    index++;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === findFn){
      return;
    }
  }
  return null;
}
