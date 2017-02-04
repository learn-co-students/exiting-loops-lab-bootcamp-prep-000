function breakOut(array, changeValue, stopValue){
  array.forEach(element => {
    if(element === stopValue){
      break;
    }
    element = changeValue;
  })
  return array;
}

function keepGoing(array, changeValue, skipValue){
  array.forEach(element => {
    if(element === skipValue){
      continue;
    }
    element = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  array.forEach((element)=>{
    if(findFn(element)){
      return element;
    }
  }
}
