function breakOut(arr, changeValue, stopValue){
  for(var i = 0; i < arr.length; i++){
    if (arr[i] === stopValue){
      break
    } else{
      arr[i] = changeValue
    }
  }
  return arr
}

function keepGoing(arr, changeValue, skipValue){
  for(var i = 0; i < arr.length; i++){
    if (arr[i] === skipValue){
      continue
    } else{
      arr[i] = changeValue
    }
  }
  return arr
}

function findBy(arr, findFn){
  for(var i = 0; i < arr.length; i++){
    if (findFn(arr[i])){
      return arr[i]
    } 
  }
  return null
}