function breakOut(array, changeValue, stopValue){
  for(var x = 0; x < array.length; x++){
    if(array[x] === stopValue){
      break;
    }
    array[x] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var x = 0; x < array.length; x++){
    if(array[x] === skipValue){
      continue;
    }
    array[x] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  for(var x = 0; x < array.length; x++) {
    if(findFn(array[x])){
      return array[x];
    } else {
      return null;
    }
  });
}