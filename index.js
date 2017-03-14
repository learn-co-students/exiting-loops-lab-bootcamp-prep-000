//TEST#1 Itterate through array, changeValue to all array elements
// stop if find that array[i] === stopValue
function breakOut(array,changeValue,stopValue) {
  for (let i=0, l=array.length; i<l; i++) {
    //each path test if value of element is equal to stopValue than it's break
    if (array[i] === stopValue) {
      break
    }
    //if not than change this element value to changeValue var
      array[i]=changeValue;
  }
  //return whole array after looping is finished
  return array
}

// TEST 2 don't change array[i] if it is equal to skipValue
function keepGoing(array, changeValue,skipValue) {
  for (let i=0, l=array.length; i<l; i++) {
    //each path test if value of array[i] === skipValue than it's skip
    if (array[i] === skipValue) {
      continue
    }
    //if not than change this element value to changeValue var
      array[i]=changeValue;
  }
  //return whole array after looping is finished
  return array
}

//TEST#3 looks for a value in array based on return value of findFn()
function findBy(array, findFn) {
  for (let i=0, l=array.length; i<l; i++) {
    //passing an array[i] as an attribute for our findFn() if it's true than return element
    if (findFn(array[i])) {
      return array[i]
    }
}

return null
}
