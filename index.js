function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == stopValue) {
      break;
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
 for(var i = 0; i < array.length; i++){
   if (array[i] == skipValue) {
     continue
   }
   array[i] = changeValue
 }
 return array
}

function findBy(array, findFn){
  array.forEach(findFn(value){
    if (findFn !== value) {
      return null
    }
  })
  return array
}
