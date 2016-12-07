var breakOut = (array, changeValue, stopValue) => {
  for(var i = 0; i < array.length; i++){
    if(array[i] === stopValue)
      break;

    array[i] = changeValue
      }

      return array
}

var keepGoing = (array, changeValue, skipValue) => {
  for(var i = 0; i < array.length; i++){
    if(array[i] === skipValue)
      continue
    array[i] = changeValue
  }
  return array
}

var findBy = (array, findFn) =>{
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i]))
      return array[i]
  }
  return null
}
