function breakOut(array, changeValue, stopValue) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] != stopValue) {
        array[i] = changeValue;
      } else {
        break;
      }
    }
    return array;
  }

function keepGoing(array, changeValue, skipValue) {
  var solution = [];
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value === skipValue) {
      solution.push(value);
      continue;
    } else {
      solution.push(changeValue);
    }
  }

  return solution;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {

      return array[i];
      }

    } return null;
  }
