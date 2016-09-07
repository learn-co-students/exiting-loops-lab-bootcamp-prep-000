function breakOut(arr, changeVal, breakVal){
  for (let i = 0, l = arr.length; i < l; i++){
    if (arr[i] === breakVal){
      break;
    }
    arr[i] = changeVal;
  }
  return arr;
}

function keepGoing(arr, changeVal, skipVal){
  for (let i = 0, l = arr.length; i < l; i++){
    if (arr[i] === skipVal){
      continue;
    }
    arr[i] = changeVal;
  }
  return arr;
}

function findBy(arr, findFn){
  for (let i = 0, l = arr.length; i < l; i++){
    if (findFn(arr[i])){
      return arr[i];
    }
  }
  return null;
}
