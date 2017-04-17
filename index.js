function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue)
    {array[i] = changeValue}
    else if (array[i] === stopValue)
    {break}
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== skipValue)
    {array[i] = changeValue}
    else if (array[i] === skipValue)
    {continue}
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++){
    if (findFn(array[i]))
      {return array[i]}
  }
  return null
}
