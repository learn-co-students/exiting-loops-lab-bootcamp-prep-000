function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break;
    }
    else {
      array[i] = changeValue;
    }
  }
  return array;
}
function keepGoing(array, ChangeValue, skipValue){
  array.forEach(function(e, i){
  if (e !== skipValue){
    array[i] = ChangeValue;
  };
});
  return array;
};

function findBy(array, findFn){
for(var i = 0; i < array.length; i++){
  if(findFn(array[i])) {
    return array[i];
  };
};
return null;
};
