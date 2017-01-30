function breakOut(array, changeValue, stopValue){
var newArr = [];
  for (var i = 0; i < array.length; i++){
    var ele = array[i];
    if (ele === stopValue){
      var arrayEnd = array.slice(i);
      for (var j = 0; j < arrayEnd.length; j++){
        newArr.push(arrayEnd[j]);
      }
      break;
    }
	newArr.push(changeValue);
  }
return newArr;
}


// function keepGoing(arr, changeValue, skipValue){
//   var incompleteArr = [];
//   arr.forEach(function(ele) {
//     if(ele === skipValue){
//       incompleteArr.push(ele);
//       continue;
//     } else {
//     incompleteArr.push(changeValue);
//     }
//   });
//   return incompleteArr;
// }

function keepGoing(array, changeValue, skipValue){
  var incompleteArr = [];
  for (var i = 0; i < array.length; i++){
    var ele = array[i];
    if (ele === skipValue){
      incompleteArr.push(ele);
      continue;
    } else {
      incompleteArr.push(changeValue);
    }
  }

  return incompleteArr;
}

// function findBy(array, findFn){
//   array.forEach(function(ele){
//     if (findFn(ele)){
//       return ele;
//     }
//   })
//   return null;
// }

function findBy(array, findFn){
  for (var i = 0; i < array.length; i++){
    var ele = array[i];
    if(findFn(ele)){
      return ele;
    }
  }
  return null;
}
