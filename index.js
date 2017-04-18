function breakOut(array, changeValue, stopValue) {
  for (let i = 0; array.length - 1; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

/*function keepGoing(array, changeValue, skipValue) {
  array.forEach((element, index, array) => {
    if (element != skipValue) {
      array[index] = changeValue
    }
  })
  return array
}*/

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    
    array[i] = changeValue
  }
  return array
}

/* expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c) */

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i]) === true) {
      return array[i]
    }
  }
  return null
}