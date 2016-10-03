function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == stopValue) {
      break;
    } else if (array == changeValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i <array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}


function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
      }
  }
  return null;
}

//fun little experiment:
// function keepGoing(array, changeValue, skipValue) {
//   array.foreach((element, index)=>{
//     if (element == skipValue) {
//       continue;
//     } else {
//       array[index] = changeValue;
//     }
//   })
//   return array;
// }
