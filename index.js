//fundtion breakOut iterates through array and changes every element to changeValue
//until the loop reaches stopValue
function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
      if (array[i] !== stopValue ) {
        array[i] = changeValue;// changes array element to changeValue
      }else { //when array reaches stop value return array and break out of loop
        return array;
        break
      }
    }
}
//function keepGoing iterates through array and changes every element to
//changeValue except those that match skipValue
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
      if (array[i] === skipValue ) {// if array element equals skipValue skip element
        continue
      }
      array[i] = changeValue;// all elements that don't equal skip element change
    }
    return array;
}
// function findBy which looks for a value in array based on the return value of
// findFn. Return null if the value isn't found.
function findBy(array, findFn){
  for(var i =0, l = array.length; i<l; i++){
  if (findFn(array[i])) { // look for a value in array
      return array[i];
    }
  }
  return null
  }
