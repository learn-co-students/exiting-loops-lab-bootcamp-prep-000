function breakOut(array, changeValue, stopValue){
//iterates through `array` and changes every element to `changeValue` until the loop reaches `stopValue`. Then we `break` out of the loop and return the array.
for (var i = 0, l = array.length; i<l; i++){
  if (array[i] === stopValue){
    return array;

  } else {
    array[i] = changeValue;
  }
}
}
function keepGoing(array, changeValue, skipValue){
//iterates through `array` and changes every element to `changeValue` except those that match `skipValue`. Then return the array.
for (var i = 0, l = array.length; i < l; i++){
  if (array[i] === skipValue){
    continue;
  }
  array[i]=changeValue;
}
return array
}
function findBy(array, findFn) {
  for (var i = 0; i <array.length; i++){
    if (findFn(array[i])){
      return array[i]
    }
  }
  return null
}
