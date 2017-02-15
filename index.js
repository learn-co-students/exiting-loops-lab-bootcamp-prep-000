function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i++){

   if ( array[i] === stopValue ) {
    break;
   }
  array[i] = changeValue;
 }
   return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if ( array[i] === skipValue ) {
     continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
 console.log('function was called')
  for(var i = 0; i < array.length; i++) {
    console.log('in the loop: current elem', array[i])
    console.log('return value of findFn:', findFn(array[i]))
    if( findFn(array[i]) ) {
      console.log('in the conditional', array[i])
      return array[i];
    }

  }

  console.log('out of the loop')

    return null;
}
