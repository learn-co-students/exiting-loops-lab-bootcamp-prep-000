function breakOut(array, changeValue, stopValue) {
  for(var i= 0; i<array.length; i++){
    if(array[i]!==stopValue){
      array[i]=changeValue;
    }else{
      break;
    }
  }return array;
}
function keepGoing(array, changeValue, skipValue){
  for(var i= 0; i<array.length; i++){
    if(array[i]!==skipValue){
      array[i]=changeValue;
    }else{
      continue
    }
  }return array

}
function findBy(array, findFn){
  let result = null;
  for(var i= 0; i<array.length; i++){
    if(findFn(array[i])){
      result = array[i];
    }
  }return result;
}
