function breakOut (array, changeValue, stopValue) {

  for (var i =0; i<array.length; i++) {
    if (array[i]===stopValue){ break}
    else {
      array[i]= changeValue
    }
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for (var i=0; i<array.length; i++) {
    if (array[i]===skipValue) {continue}
    else {
      array[i]= changeValue
    }
  }
  return array;
}


function findBy (array, findFn){
  var found = false;
  var val = findFn();

//  console.log(val)
  for (var i =0; i<array.length; i++){
  //  console.log ("entered loop")
    if (findFn(array[i])){
  //    console.log("entered")
      found =true;
      return array[i];
    //  return array[i];

  }
}

//  console.log('exited loop')
   if (found !=true) {return null;}
   else
    return val;
}
