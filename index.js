function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== stopValue){
      array[i] = changeValue;
    }
    else{
      break;
    }  
  } 
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === skipValue){
      continue;
    }
    array[i] = changeValue; 
  }   
  return array;
}

function findBy(array, findFn){
  var found = null;
  //var val = findFn();
  //console.log(val);
  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])){
      console.log("!!!");
      found = array[i];
      break;
    }  
  }
  return found;
}