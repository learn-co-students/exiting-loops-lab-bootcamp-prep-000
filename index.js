function breakOut(array, changeValue, stopValue) {
  for (let i=0; i < array.length; i++) {
    if (array[i] == stopValue) {
    break;
    }
  array.splice(i, 1, changeValue);
  }
return array;
}


function keepGoing(array, changeValue, skipValue) {//Open function
  for (let i = 0; i < array.length; i++) {//Open for-loop
    if (array[i] == skipValue) {//Open if
    continue;
  }//Close if
  array.splice(i, 1, changeValue);
  }//Close for-loop
return array;
}//Close function


function findBy(array, findFn) {
  if (array.find(findFn) === undefined) {
  return null;
  }
  else {
  return array.find(findFn);
  }
}
