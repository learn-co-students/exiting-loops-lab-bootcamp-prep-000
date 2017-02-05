function breakOut ( array, changeValue, stopValue ) {

        for(var i = 0; i < array.length; i++) {
            // change array index value if not equal to stop value
            if (array[i] !== stopValue) {
               array[i] = changeValue;
            } else if (array[i] === stopValue) {
            // if the array index IS equal to stop value, then break out of the loop
               break;
            }
        }

    // return array once out of the loop
    return array;
}


function keepGoing (array, changeValue, skipValue) {

    for (var i = 0; i < array.length; i++) {
      if (array[i] !== skipValue) {
        array[i] = changeValue;
      } else if (array[i] === skipValue){
        continue;
      }
    }


    return array;
}


function findBy (array, findFn) {

    for (var i = 0; i < array.length; i++) {
        if ( findFn(array[i]) ) {
          return array[i];
        }
    }

    // if not found, return null
    return null;

}
