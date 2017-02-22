function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i <= array.length; i++ ) {
    if(array[i] === stopValue) {
      break;
    }
    else {
    array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== skipValue) {
      array[i] = changeValue;
    }
    continue;
  }
  return array;
}

function findBy(array, findFn) {
  for(let i = 0; i <= array.length; i++)
    if(findFn(array[i])) {
      return array[i];
    }
};
