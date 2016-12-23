function breakOut(array, changeValue, stopValue){
  for (let i = 0, l = array.length; i < l; i++){
  if (array[i] !== stopValue){
      array[i] = changeValue;  //true; changes every element to `changeValue`
    } else{
    break;  // when array[i] == stopValue;
  }}
    return array;
}


function keepGoing(array, changeValue, skipValue){
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue){
      array[i] = changeValue;
    }
    }
  return array;
}



function findBy(array,findFn){
  for (let i=0, l = array.length; i <l; i++){
    if (findFn(array[i])){
      return array[i]
    }
  }
//how can I code "if not find the value of findFn"
  return null
}
