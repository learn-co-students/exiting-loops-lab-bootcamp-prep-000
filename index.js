function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++){
    if (array[i] !== stopValue){
      array[i]=changeValue;
      continue
    }
    break
    return array;
  }
}
