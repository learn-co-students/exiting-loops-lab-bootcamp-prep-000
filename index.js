function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === stopValue){
      break
    }else {
      array[i] = changeValue
    }
  }

  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === skipValue){
      continue
    }else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, cb) {
  for (var i = 0; i < array.length; i++) {
    if(cb(array[i])){
      return array[i]
    }
  }

  return null
}
