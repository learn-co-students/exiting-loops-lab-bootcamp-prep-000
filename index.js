function breakOut(array, changeValue, stopValue){
  for(var i=0;i<array.length;i++){
    if(array[i] === stopValue){
      break
    }
    array[i] = changeValue;
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  //var foundValue = null; don't need this
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i])){ //passing in the value at that array index, to see if returns true.
      //foundValue = array[i] don't need this
      return array[i]; //if true: returns value at current index and exits the loop
    }
  }
  return null //if above executes, this return cannot: only returns if if condition is false for all elements
}
