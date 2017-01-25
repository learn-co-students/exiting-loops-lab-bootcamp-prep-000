function breakOut(array, changeValue, stopValue){
  for(var i = 0; i<array.length; i++){
    if(array[i] == stopValue){
      return array
      break;
    } else {
      array[i] = changeValue;
    }
  }
};

function keepGoing(array, changeValue, skipValue){
  for(var i =0; i<array.length; i++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    } else {
      continue;
    }
  }
  return array
};

/* function findBy(array, findFn){
    var count = 0;
    var retVal = findFn();
    for(var i = 0; i<array.length; i++){
        count++;
        if(array[i] == retVal){
            return array[i];
    } else if(count == array.length){
        return null
    } else{
        continue
    }
  }
};
*/

function findBy(array, findFn){
  for(var i=0; i<array.length; i++){
    var count = 0;
    if(findFn(array[i])){
      return array[i]
    } else if(count == array.length -1) {
      return null
    } else {
      continue
    }
  }
}
