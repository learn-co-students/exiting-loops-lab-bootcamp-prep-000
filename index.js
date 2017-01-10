function breakOut(array, changeValue, stopValue) {
  const b = array.length
  for (var i = 0; i < b; i++) {
    if (array[i] == stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}
