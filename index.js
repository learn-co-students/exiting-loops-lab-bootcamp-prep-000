function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] !== stopValue){
      array[i] = changeValue
    }
    else {
      return array
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    }
      array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  var value = null
  for (var i = 0, l = array.length; i < l; i++) {

    if (findFn(array[i])) {
      var value = array[i]
      break
    }
  }
  return value
}
