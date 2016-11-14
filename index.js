function breakOut(array, changeValue, stopValue) {

  for(var i = 0, l = array.length; i < l; i++) {

    if(array[i] === stopValue) break;
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {

  for(var i = 0, l = array.length; i < l; i++) {

    if(array[i] === skipValue) continue;
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {

  var found = null;

  for(var i = 0, l = array.length; i < l; i++) {

    if(findFn(array[i])) { found = array[i]; break;}
  }

  return found;
}
