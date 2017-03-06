function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }
    else {
      break;
    }
  }
      return array;
}
function findBy(array, findFn) {
  var val = findFn();
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {      
     return val;
   }
}
     return null;
}
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {      
     array[i] = changeValue;
   }
   else {
     continue;
   }
  }
  return array;
}