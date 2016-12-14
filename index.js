function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    console.log(`i: ${i}`)
    if(findFn(array[i])) {
      return array[i]
    }
  }
  return null
}

const c = Math.floor(Math.random() * 100)
console.log(c)
var numbers = [1, c, 1, 2]
console.log(numbers);
var ergebnis = findBy(numbers, (n) => n === c)
console.log(ergebnis)
