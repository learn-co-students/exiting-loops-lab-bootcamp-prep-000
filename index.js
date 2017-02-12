//1

function breakOut(array, changeValue, stopValue){
  for(let i =0;i<array.length;i++)
  {
  if (array[i]===stopValue){
    break;
  }
  array[i]=changeValue;
}
  return array;
}

//2
function keepGoing(array,changeValue,skipValue){
for(let i =0;i<array.length;i++){
if (array[i]===skipValue){
    continue;
  }
  array[i]=changeValue;
}
  return array;

}

//3
function findBy(array,findfn){
  for(var i=0;array.length;i++){
    if (findfn(array[i])){
      return array[i];
    }
  }
    return null
  }
