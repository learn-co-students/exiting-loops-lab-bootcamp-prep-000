function breakOut(array, changeValue, stopValue){
  for (var i = 0, 1 = array.length; i < 1 ; i++) {
    if (array[i] === stopValue){
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0, 1 = array.length; i < 1 ; i++){
    if (array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  for (let i = 0, 1 = array.length; i < 1 ; i++){
    if (findFn(array[i])){
      return array[i];
    }
  }
  return null;
}
