function breakOut(array,changeValue,stopValue){
  array.forEach(function(val,index){
    if(val === stopValue){
      break
    }
    array[index] = changeValue;
  })
}