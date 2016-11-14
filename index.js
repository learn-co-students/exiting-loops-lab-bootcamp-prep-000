function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    }

    array[i] = changeValue
  }

  return array
}

function keepGoing(array, changeValue, skipValue)
{
    array.forEach((item, i) => {
        if (item != skipValue) {
            array[i] = changeValue;
        }
    });
    return array;
}


function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }

  return null
}
