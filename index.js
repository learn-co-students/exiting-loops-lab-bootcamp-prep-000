function breakOut(array,changeValue,stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == stopValue){
      break;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array,changeValue,skipValue){
  for(var i = 0; i< array.length;i++){
    if(array[i]=== skipValue){
      continue;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array,findFn){
  var count = 0;
  for(var i = 0; i< array.length;i++){
  var value = findFn(array[i])
      if(value){
           count++;
            return array[i];
          }
     }
   if(count!==0){
     return null;
 }
}
