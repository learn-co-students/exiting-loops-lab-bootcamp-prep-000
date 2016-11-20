function breakOut(array, changeValue, stopValue){
  for(var i = 0, l = array.length; i<l; i++){
    if(array[i] != stopValue){
      array[i] = changeValue;
    }else{
      return array;
    }
  }
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0, l = array.length; i<l; i++){
    if (array[i] === skipValue){
      continue;
    }else{
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  var truth = false;
  for (let i = 0, l = array.length; i < l; i++){
    if (findFn(array[i])){
      truth = true;
      return array[i];
    }
  }if (truth === false){
    return null;
  }
}
