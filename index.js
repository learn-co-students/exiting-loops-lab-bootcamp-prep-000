function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }

  return array
}

function findBy(array, findFn){
  var found = null
  console.log('array is', array)
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i]) == true){
      found = array[i]
      break
    }
  }

  // var find = findFn()
  // console.log('value of findFn: ', find)
  // for(let i = 0; i < array.length; i++){
  //   if(array[i] === find){
  //     found = 1
  //     break
  //   }
  // }
  return found
}
