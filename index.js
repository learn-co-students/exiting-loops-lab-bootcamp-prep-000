// Learn.co Bootcamp Prep 19 JavaScript Exiting Loops Lab

// Define a function, 'breakOut', that accepts three parameters:
// 'array', 'changeValue', 'stopValue'.
// Iterate over each element in 'array', replacing each element with
// 'changeValue' until 'stopValue' is reached.
// Break out of the loop.
// Return the array.
function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

// Define a function, 'keepGoing', that accepts three parameters:
// 'array', 'changeValue', 'skipValue'.
// Iterate over each item in 'array' and change every element to 'changeValue'
// except values that match 'skipValue'.
// Return the array.
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

// Define a function, 'findBy', that accepts two parameters:
// 'array', and 'findFn'.
// Iterate over each item in the array, if the element is the result of 'findFn'
// return the value.
// Else, return null.
function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i]))
      return array[i];
    }
    return null;
}
