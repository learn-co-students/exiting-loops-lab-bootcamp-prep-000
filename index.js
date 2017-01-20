function breakOut(array, changeValue, stopValue){
  /* which iterates through `array` and changes every element to `changeValue` 
  until the loop reaches `stopValue`. Then we `break` out of the loop and return the array. */
for (let i = 0, l = array.length; i<l; i++) {
  if (array[i] === stopValue) {break;}
  array[i] = changeValue;
}
  return array;
}

function keepGoing(array, changeValue, skipValue){
  /* which iterates through `array` and changes every element to `changeValue`
   except those that match `skipValue`. Then return the array. */
   for (let i = 0, l = array.length; i<l; i++) {
     if (array[i] === skipValue) {continue;}
     array[i] = changeValue;
   }
     return array;
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i<l; i++) {
    if (findFn(array[i])) {return array[i]}
  }
  return null;
}
