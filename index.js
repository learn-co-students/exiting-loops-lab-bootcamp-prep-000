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
var val = null;
for(var i = 0; i < array.length; i++){
  if(array[i] === findFn) {
    val = array[i];
  };
};
return val;
};

var findFn = x => x;
