
function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      //return array
      break
      //return array
    }
    array[i] = changeValue
    //var changeValueString = changeValue.toString()
  //  if (array[i] !== stopValue) {
    //  array[i] = changeValue
    //}
    //break
    //return array
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}

// This worked in browser console.  Not sure why it doesn't work here.
// Seems to do with the fact that the findFn argument supplied by the test
// is a function, not a simple argument.
//
//function findBy(array, findFn) {
//  var y = 0
//  var w = 0
//  for (var i = 0; i < array.length; i++) {
//    if (array[i] === findFn) {
//      var y = 88
//      var w = i
//    }
//  }
//  if (y === 88) {
//      return array[w]
//  }
//  if (y === 0) {
//    return null
//  }
//}
