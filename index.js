function breakOut(array, changeValue, stopValue){
  array.forEach(function(item, i, arr){
    if (array[item]==stopValue){break}
    array[item]=changeValue;
  } )
}