function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
    break
      }
      array[i] = changeValue
    }
    return array
  }
  //three equals signs means the items on either side must be exact in every way

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue
  }
  return array
}
//use continue because we want the loop to keep checking through values
//if it encounters a skipValue
//Otherwise it needs to change values

function findBy(array, findFn) {
    for (let i = 0, l = array.length; i < l; i++) {
      if (findFn(array[i])) {
        return array[i]
      }
    }
    return null
  }
//findFn is a function that is going to pass through the array checking its values
//if findFn does not find a certain value of findFn it will return null
//this is similar to an if else statements
