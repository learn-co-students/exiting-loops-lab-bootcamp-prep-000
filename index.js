function breakOut(array, changeValue, stopValue){
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
      }
      return array;
}

/*function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}

find([1, 1, 3, 1, 5, 6, 8, 10], (n) => n % 2 === 0) // 6
 
// Find the first string whose length is > 3
find(["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"], (s) => s.length > 3) // "horse"*/

function findBy(array, findFn){
  for (var i = 0, l = array.length; i < l; i++){
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null
}