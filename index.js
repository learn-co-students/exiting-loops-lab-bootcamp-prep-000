function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == stopValue) break;
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] == stopValue) continue;
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, fn){
  var res;
  array.forEach(val => {
    if(fn(val))res=val;
  });
  return res;
}