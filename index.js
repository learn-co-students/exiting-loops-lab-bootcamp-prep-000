function breakOut(array, changeValue, stopValue){
  for(var i = 0, l = array.length; i < l; i++){
    if(array[i] === stopValue){
      return array;
    }
    array[i] = changeValue;
  }
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0, l = array.length; i < l; i++){
    if(array[i] !== skipValue){
    array[i] = changeValue;
    }
    continue;
  }
  return array;
}

function findBy(array, findfn){
  for(var i = 0, l = array.length; i < l; i++){
    if(findfn(array[i])){
      return array[i];
    }
  }
}
