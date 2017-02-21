function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    var ele = array[i]

    if (ele === stopValue) {
      break
    }

    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
for (var i = 0; i < array.length; i++) {
    var ele = array[i]

    if (ele === skipValue) {
      continue
    }

    array[i] = changeValue
  }

  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    var ele = array[i]

    if (findFn(ele)) {
      return ele
    }
  }

  return null
}
