function breakOut(array, changeValue, stopValue){
  for(let i = 0, l = array.length; i<l; i++){
    if(element === stopValue){
      break;
    }
    element = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  array.forEach(element => {
    if(element === skipValue){
      return;
    }
    element = changeValue;
  }
  return array
}

function findBy(array, findFn){
  array.forEach((element)=>{
    if(findFn(element)){
      return element;
    }
  }
}
