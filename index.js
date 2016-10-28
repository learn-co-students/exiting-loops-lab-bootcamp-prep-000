function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i += 1){
    if(array[i] === stopValue) {
      break;
    }
    else {array[i] = changeValue; }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i += 1){
    if(array[i] === skipValue) {
      continue;
    }
    else {array[i] = changeValue; }
  }
  return array;
}

function findBy(array, findFn) {
  var found = null;
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])){
      found = array[i];
    }
  }
  return found;
}
