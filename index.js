function breakOut(arr, changeVal, stopVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stopVal) {
      break
    }
    arr[i] = changeVal
  }

  return arr
}

function keepGoing(arr, changeVal, skipVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === skipVal) {
      continue
    }

    arr[i] = changeVal
  }

  return arr
}

function findBy(arr, findFn) {
  for (let i = 0; i < arr.length; i++) {
    if (findFn(arr[i])) {
      return arr[i]
    }
  }

  return null
}
