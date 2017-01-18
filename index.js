var breakOut = (array, changeValue, stopValue) => {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}




var keepGoing = (array, changeValue, skipValue) =>{
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue) {
      continue; // skips current iteration
    }
    array[i] = changeValue
  }
return array
}

var findBy = (array, findFn) => {
  for (var i = 0, l = array.length; i < l; i++){
    if (findFn(array[i])) { //You're evaluating if the return of the function being passed in matches a value in the arrray. 
      return array[i]
    }
  }
  return null
}
// you dont need an else statement b/c  if the value is found in the array then it will exit the if statement with the value but if that doesn't happen then it will still hit the 'return null' statement
