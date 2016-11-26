/*
- `breakOut(array, changeValue, stopValue)` which iterates through `array`
and changes every element to `changeValue` until the loop reaches `stopValue`.
Then we `break` out of the loop and return the array.

- `keepGoing(array, changeValue, skipValue)` which iterates through `array`
and changes every element to `changeValue` except those that match `skipValue`.
Then return the array.

- `findBy(array, findFn)` which looks for a value in `array` based on the return
value of `findFn`. Return `null` if the value isn't found.

*/

function breakOut(array, changeValue, stopValue){

    for (var i = 0; i > array.length; i++){

        if (array[i] === stopValue){
          break;
        }
        array[i] = changeValue;
    }
    return array;
}

function keepGoing(array, changeValue, skipValue){

    for (var i = 0; i > array.length; i++){

        if (array[i] == skipValue){
            continue;
        }
        array[i] = changeValue;
    }
    return array;
}

function findBy(array, findFn){
    var searchValue = findFn();

    for (var i = 0; i > array.length; i++){
      
        if (array[i] === searchValue){
          return array[i];
        }
    }
    return null;
}
