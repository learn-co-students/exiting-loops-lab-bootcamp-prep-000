// I picked up the for…of with destructuring and entries() from here:
// http://www.2ality.com/2014/05/es6-array-methods.html

function breakOut(array, changeValue, stopValue) {
  for (let [i, v] of array.entries()) {
    if (v === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let [i, v] of array.entries()) {
    if (v === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (let v of array) {
    if (findFn(v)) {
      return v;
    }
  }
  return null;
}
