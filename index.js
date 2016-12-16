function breakOut (array, changeValue, stopValue) {
  for (var i =0;i<array.length;i++) {
    if(array[i] === stopValue) {
        break;
      };
    array[i] = changeValue;
  }
  return array;
}

function keepGoing (array, changeValue, stopValue) {
  for (var i =0;i<array.length;i++) {
    if(array[i] === stopValue) {
        continue;
      };
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
/*  array.forEach((value) => {
    console.warn(`at ${value}`);
    if(findFn(value)) {
      console.warn(`found it: ${value}`);
      return value;
    };
  })
  */
  for (var i =0;i<array.length;i++) {
    console.warn(`at index ${i} of ${array.length}, value=${array[i]}`);
    if(findFn(array[i])) {
      return array[i];
    }
  }
  return null;  
}
