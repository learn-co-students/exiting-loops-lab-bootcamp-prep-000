function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break //if the stopValue is encountered loop will end
    }
    array[i] = changeValue; //changes array values to new values
  }
  return array //returns the new array
}

function keepGoing(array, changeValue, skipValue) {
for (let i = 0; i < array.length; i++) {
  if (array[i] === skipValue) {
    continue //will skip over the specified skipValue
    }
  array[i] = changeValue; //iterates through array and changes each value to the changeValue value
  }
  return array //returns the new array
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) { //looks for findFn within array
      return array[i] //returns index in array equal to findFn
      }
    }
  return null //return is always outside loop but w/in function?
}
