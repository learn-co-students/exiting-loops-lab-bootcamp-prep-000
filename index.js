function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}
debugger;
function findBy(array, findFn) {
  var found = null
  for (var i = 0, l = array.length; i < l; i++) {
    if ( findFn(array[i]) ) {
      found = array[i]
    }
  }
  return found
}
