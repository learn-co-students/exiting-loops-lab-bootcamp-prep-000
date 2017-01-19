function breakOut (array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
  if (array[i] === stopValue) {
    return array;
    break;
  }
  array[i] = changeValue;
  }
}

function keepGoing (array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  let found = null;
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      found = array[i];
      return found;
    }
  }
  return found;
}
