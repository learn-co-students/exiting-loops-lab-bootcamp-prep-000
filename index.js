var breakOut = (array, changeValue, stopValue) => {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === stopValue) {
            break;
        }

        array[i] = changeValue
    }
    return array
}

var keepGoing = (array, changeValue, skipValue) => {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === skipValue) {
            continue;
        }

        array[i] = changeValue
    }
    return array
}

var findBy = (array, findFn) => {
  for (let i = 0; i < array.length; i++) {

      if (findFn(array[i])) {
          return array[i];
      }
    }
}
