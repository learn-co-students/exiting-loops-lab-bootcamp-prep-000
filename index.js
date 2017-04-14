function breakOut(array, changeValue, stopValue){
for (let i = 0; i < array.length; i++){
  if (array[i] !== stopValue) {
      array[i] = changeValue
  }
  else {

    return array
    break
  }
}
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue

  }
  return array
}

function findBy(array, findFn){
  var find = null
  for (let i = 0, l = array.length; i < l; i++){
    if (array[i] === findFn){
      find = findFn
      break
    }
  }
  return find
}
