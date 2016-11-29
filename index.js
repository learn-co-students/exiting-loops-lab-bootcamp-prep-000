function breakOut(array, changeValue, stopValue){
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    }
    else if (array[i] === stopValue) {
      return array
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue){
      continue
    } else {
    array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn){
  for(var i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i]) === false) {
      continue
    } else if (findFn(array[i]) === true) {
      return array[i]
    }
  }
  return null
}
