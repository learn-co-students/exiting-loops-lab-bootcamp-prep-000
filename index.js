function breakOut(array,changeValue,stopValue) {
    for(var i=0,l=array.length;i<l;i++){
      if (array[i] === stopValue){
      return array
      }
      else{
        array[i] = changeValue
      }
    }return array
}
