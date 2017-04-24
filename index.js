
function breakOut(array, changeValue, stopValue){
  for (let i = 0, l = array.length; i < l; i++) {
  if (array[i] != stopValue) {
    array[i] = changeValue
  } else {
    break;
  }
}
  return array
}

function keepGoing(array, changeValue, skipValue){
  for( var i =0; i<array.length; i++ ){
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if ( findFn(array[i]) ){
      // array[i] = findFn
     return array[i];
   }
 }
 return null;
}
