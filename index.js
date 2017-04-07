function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    } else {
    break;
  }
  }
  return array;
}


function keepGoing(array, changeValue, skipValue)  {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == skipValue) {
  continue
} else {
  array[i] = changeValue;
}
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
  if (findFn(array[i])) {
    return array[i];
  }
  }
 if (findFn(array) == false) {
  return null;
}
}
