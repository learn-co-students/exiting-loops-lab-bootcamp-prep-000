function breakOut(array, changeValue, stopValue){
  for(var i in array){
    if(array[i]===stopValue){
      return array
    }
    array[i]=changeValue
    }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i in array){
    if(array[i]===skipValue){
      continue
    }
    array[i]=changeValue
    }
  return array  
}

function findBy(array, findFn){
  for(var i in array){
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null
}