function breakOut(array, changeValue, stopValue) {

  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
       array[i] = changeValue
     } else {
       break
     }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array [i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}
// var animals = ["dog", "cat", "penguin"]
//findBy(animals, "elephant")


function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
