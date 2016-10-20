function breakOut(array,changeValue,stopValue){
  for (var index in array) {
    if (array[index] === stopValue) {

      break
    }
      else {
        array[index] = changeValue}

    }
          return array
  }
function keepGoing(array,changeValue,skipValue){
  for (var i in array){
    if (array[i]=== skipValue){
      continue
    }

      array[i]=changeValue
  }
  return array
}

function findBy(array,findFn){
  for (var i in array){
    if (findFn(array[i])){
      return array[i]
    }
}
      return null
    }
