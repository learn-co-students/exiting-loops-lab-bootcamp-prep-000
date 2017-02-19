function breakOut(array, changeValue, stopValue) {
    for (var i=0; i<array.length; i++) {
        if (array[i] !== stopValue) {array[i] = changeValue}
        else break
        }
    return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i=0; i<array.length; i++) {
        if (array[i] !== skipValue) {array[i] = changeValue}
  }
  return array
}

function findBy (array, findFn) {
    for (var i=0; i<array.length; i++) {
        if (findFn(array[i])) {return array[i]; break} 
    }
   return null
}



function findByA (array, findFn) {
    for (var i=0; i<array.length; i++) {
        if (array[i] !== findFn()) {continue}
		else {return "it's here"}
    }
   return null
}

function findBy2 (array, findFn) {
    for (var i=0; i<array.length; i++) {
        if (array[i] === findFn()) {var c = 7; break}
		else {var c = 9}
    }
    if (c ===9) return null
}
