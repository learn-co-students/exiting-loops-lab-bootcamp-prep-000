function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++){
    if (i > stopValue){
      array[i] = changeValue;
      break;
    }
      array[i] = changeValue;
  }
        return array;
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++){
    if (array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

//I don't fully understand this one below. I guess it's running a findFn that matches a criteria we don't really know. Check out the Mocha tests later.

function findBy(array, findFn){
  for (let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;
}