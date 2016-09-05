function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      return array;
    }
    array[i] = changeValue;
  }

}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i< array.length; i++){
    if(array[i] === skipValue){
      continue;
    }else{
      array[i]=changeValue;
    }
  }
return array;
}

function findBy(array, findFn){
var result = findFn(array);
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }

    }
  }
// Now that we've had some practice breaking out of loops, it's time to break free and practice a bit without training wheels.
//
// In `index.js`, you'll have to define a few functions:
//
// - `breakOut(array, changeValue, stopValue)` which iterates through `array` and changes every element to `changeValue` until the loop reaches `stopValue`. Then we `break` out of the loop and return the array.
// - `keepGoing(array, changeValue, skipValue)` which iterates through `array` and changes every element to `changeValue` except those that match `skipValue`. Then return the array.
// - `findBy(array, findFn)` which looks for a value in `array` based on the return value of `findFn`. Return `null` if the value isn't found.
