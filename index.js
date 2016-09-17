function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] != stopValue) {
      array[i] = changeValue
    }else {
  break
}
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    i++
    } else {
    array[i] = changeValue
  }

}
return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
}
return null // the null s outside because we want the function to return null  if it doesnt match it
}
