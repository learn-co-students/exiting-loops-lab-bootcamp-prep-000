function breakOut(array, changeValue, stopValue){
  let i = 0
  while (array[i] !== stopValue) {
    array[i] = changeValue
    i++
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  let newArray = array.map((x) => {
    if (x != skipValue) {
      return x = changeValue
    } else {
      return x
    }
  })
  return newArray
}

// function findBy(array, findFn){
//   array.forEach((e) => {
//     return findFn(e) ? e = findFn : null
//   })
// }

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if ( findFn(array[i]) ){
      // array[i] = findFn
     return array[i];
   }
 }
 return null;
}
