function breakOut(array, changeValue, stopValue){
  for(var i=0; i<=array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue
    }
    else{
      break
    }
    
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i=0; i<array.length; i++){
    if(array[i] === skipValue){
      continue
    }
      array[i] = changeValue
  }
  return array
}


function findBy(array, findFn) {
  for (let i = 0, a = array.length; i <= a; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
    else if(i===(a-1)){
      return null
    }
  }
}
