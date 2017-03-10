function breakOut (array, changeValue, stopValue) {
  //iterates through array
  for(let i=0, l = array.length; i < l; i ++) {
    //until loop reaches stopValue
    //break out when reaches stopValue
    if(array[i] === stopValue) {
      break
    }
    //change every element to ChangeValue
    array[i] = changeValue
  }
    //return array
    return array
}


function keepGoing(array, changeValue, skipValue) {
  //iterates through array
  for(let i=0, l = array.length; i < l; i ++) {
    //except those that match skipValue
    if(array[i] === skipValue) {
      continue
    }
  //change every element to changeValue
  array[i] = changeValue
  }
  //return array
  return array
}


function findBy(array, findFn) {
  //iterate through array
  for (let i = 0, l = array.length; i < l; i++) {
  //looks for value in array
  //based on return value findFn
  if(findFn(array[i])) {
    return array[i]
  }
}
  //return null if value is not found
  return null
}
