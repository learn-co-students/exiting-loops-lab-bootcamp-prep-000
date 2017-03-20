function breakOut(array, changeValue, stopValue){
  for(var i = 0, l = array.length; i < l; i++){
    
    if(array[i] !== stopValue){
     array[i] = changeValue
   }if(array[i] === stopValue){
      break;
    }
  } 
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0, l = array.length; i < l; i++){    
   if(array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}
  
function findBy(array, findFn) {
  for(var i in array){
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;
} 
//if(array[i] === findFn){
  //return findFn;
//}