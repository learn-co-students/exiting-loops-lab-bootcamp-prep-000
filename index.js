function breakOut(array, changeValue, skipValue){
  for(var i=0; i < array.length; i++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i=0; i < array.length; i++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    } else {
      continue;
    }
  }
  return array;
}

function findBy(array, findFn){
  var counter;
  for(var i=0; i<array.length; i++){
    if(findFn(array[i]) === true){
      counter = array[i];
    }
  }
  return counter == undefined ? null : counter;
}
