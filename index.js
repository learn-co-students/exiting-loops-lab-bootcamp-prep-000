/*
- `breakOut(array, changeValue, stopValue)`
which iterates through `array` and changes every element to `changeValue`
until the loop reaches `stopValue`.
Then we `break` out of the loop and return the array.
*/

function breakOut(array, changeValue, stopValue) {
  var newArray = array.slice(0);

  for (let i = 0, l = array.length; i < l; i++) {
  	if (newArray[i] === stopValue) {
  		break;
  	}
  	else {
  		newArray[i] = changeValue;
  	}
  }

  return newArray;
}


/*
- `keepGoing(array, changeValue, skipValue)` which iterates through `array`
and changes every element to `changeValue` except those that match `skipValue`.
Then return the array.
*/
function keepGoing(array, changeValue, skipValue) {
	var newArray = array.slice(0);

	for (let i = 0, l = array.length; i < l; i++) {
		if (newArray[i] === skipValue) {
			continue;
		}
		else {
			newArray[i] = changeValue;
		}
	}
	return newArray;
}


/*
- `findBy(array, findFn)` which looks for a value in `array` based on the
return value of `findFn`. Return `null` if the value isn't found.
*/

function findBy(array, findFn) {

	for (let i = 0, l = array.length; i < l; i++) {
		if (findFn(array[i])) {
			return array[i];
		}
	}
	return null;

}
