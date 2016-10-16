function breakOut(array, changeValue, stopValue) {
  for (let i=0; i<array.length; i++) {
    if (array[i]===stopValue) {
      break
    }
    else {
      array[i]=changeValue
    }
  }
  return array
}
function keepGoing(array, changeValue, skipValue) {
  for (let i=0; i<array.length; i++) {
    if (array[i]===skipValue) {
      continue
    }
    else {
      array[i]=changeValue
    }
  }
  return array
}
function findBy(array, findFn) {
  for (let i=0; i<array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
    return null
}
function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}
/*
function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}
findBy([1, 1, 1, 1, c, 1, 2], n => n === c)
function findFn() { n => n === c}
[1, 1, 1, 1, c, 1, 2]
*/
