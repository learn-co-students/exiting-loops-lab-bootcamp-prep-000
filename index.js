function breakOut(array,changeValue,stopValue) {
  for (var i=0; i<array.length;i++) {
    if (array[i]==stopValue) {break}
    else {array[i]=changeValue;}
  }
  return array;
}

keepGoing(array,changeValue,skipValue)
