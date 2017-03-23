function breakOut(array, changeValue, stopValue) {
  for( var m = 0; m < array.length; m++) {
    if (array[m] === stopValue) {
      break
    }
    array[m] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var m = 0; m < array.length; m++){
    if (array[m] === skipValue){
      continue
    }
    array[m] = changeValue
  }
  return array
}

function findBy(array, findFn){
  for ( var m = 0; m < array.length; m++){
    if (findFn(array[m]) == true){
      return array[m]
    } 
    if( m === (array.length - 1)){
      return null
    }
  }
}