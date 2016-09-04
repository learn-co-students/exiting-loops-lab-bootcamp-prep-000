function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== stopValue){
      array[i] = changeValue
    }else{
      break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== skipValue){
      array[i] = changeValue
    }else{
      continue
    }
  }
  return array
}

function findBy(array, findFn){
  for (var i = 0; i < array.length; i++) {
    console.log("if", array[i], findFn(array[i]));
    if(findFn(array[i])){
      return array[i]
    }else {
      continue
    }
  }
  return null
}
