function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array

}

function  keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == skipValue) {continue}
  array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  let result = null
  for (let i = 0, l = array.length; i < l; i++) {

    if (findFn(array[i])) {
      result = array[i]
    }
    }
    return result

  }
