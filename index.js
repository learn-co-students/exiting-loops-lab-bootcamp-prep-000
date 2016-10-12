// In index.js, you'll have to define a few functions:

// breakOut(array, changeValue, stopValue) which iterates through array and
//changes every element to changeValue until the loop reaches stopValue.
//Then we break out of the loop and return the array.

var array = [1, 2, 3];

function breakOut(array, changeValue, stopValue) {

  //array.forEach(changeValue);
  for (let i = 0, l = array.length; i < l; i++) {  //made l = array.length
  if (array[i] == stopValue) {  // need == here, just one = will break it
    break
    }
  (array[i] = changeValue)
  }
return array
}


// keepGoing(array, changeValue, skipValue) which iterates through array
//and changes every element to changeValue except those that match skipValue.
//Then return the array.

function keepGoing(array, changeValue, skipValue) {

  for (let i = 0, l = array.length; i < l; i++) {  //made l = array.length
  if (array[i] === skipValue) {  // need == here, just one = will break it
    continue
    }
  (array[i] = changeValue)
  }
return array
}


// last problem, from index-test.js:::

// describe('findBy(array, findFn)', function() {
//   it('finds the a value that satisfies `findFn`', function() {
//     const c = Math.floor(Math.random() * 100)
//
//     expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c)
//   })
//
//   it('returns `null` if no match found', function() {
//     expect(findBy(["dog", "cat", "cow"], a => a === "moose")).toEqual(null)
//   })
// })
// })

// findBy(array, findFn) which looks for a value in array based
//on the return value of findFn. Return null if the value isn't found.

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
  if (findFn(array[i]) === true) {
    return((array[i]))
    }
  }
}
