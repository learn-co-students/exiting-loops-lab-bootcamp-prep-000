function breakOut(array, changeValue, stopValue){
  for(var i=0; i < array.length; i++){
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    } else {
      break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i=0; i < array.length; i++){
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue;
    }
  }
  return array
}
// I wanted to practice callbacks but it did not work.
/*function findBy(array, findFn){
  array.forEach(function(element,index,array){
      if(findFn(array[index])) {
      return array[index]
  }
  })
}*/

function findBy(array, findFn) {
  for (let i=0; i < array.length; i++) {
      if (findFn(array[i])) {
      return array[i];
    }
  }
}
