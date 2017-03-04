var breakOut = (array, changeValue, stopValue) => {
  for (var i in array) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array;
};

var keepGoing = (array, changeValue, skipValue) => {
  for (var i in array) {
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array;
};

var findBy = (array, findFn) => {
  for (var i in array) {
    console.log(`Checking ${array[i]}`)
    if (findFn(array[i])) {

      return array[i];
    }
  }
  return null;
};
