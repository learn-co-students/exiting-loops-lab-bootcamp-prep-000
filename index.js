function breakOut(arr, chngVal, stopVal) {
  for(let i = 0; i < arr.length; i++ ) {
    if(arr[i] === stopVal) {
      break;
    } else {
      arr[i] = chngVal;
    }
  }
  return arr;
}

function keepGoing(arr, chngVal, skipVal) {
  for(let idx = 0; idx < arr.length; idx++) {
    if(arr[idx] !== skipVal) {
      arr[idx] = chngVal;
    }
  }
  return arr;
}

function findBy(arr, findFn) {
  for(let j = 0; j < arr.length; j++) {
    if(findFn(arr[j])) {
      return arr[j];
    }
  }
}
