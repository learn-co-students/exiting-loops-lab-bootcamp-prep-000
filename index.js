function breakOut(array, changeValue, stopValue) {
  for (var i=0, l=array.length; i<l; i++) {
    if (array[i]!==stopValue) {
      array[i]=changeValue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i=0, l=array.length; i<l; i++) {
    if (array[i]!==skipValue) {
      array[i]=changeValue;
    } else {
      continue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  var found = false;
  for (var i=0, l=array.length; i<l; i++) {
    if (findFn(array[i])) {
      found=true;
      return array[i];
    }
  }
  return null;
}
