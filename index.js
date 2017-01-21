function breakOut(array, changeValue, stopValue) {

for(let i=0;i<array.length; i++)
{
  if(array[i] === stopValue)
  {
    console.log(array[i])
    break;
  }else{
    array[i] = changeValue;
  }
}
return array;
}

function keepGoing(array, changeValue, skipValue){
  
  for(let i=0;i<array.length;i++)
  {
    if(array[i] === skipValue)
    {
      continue;
    }
    array[i] = changeValue;
  }
  return array
}

// findBy(array, (n) => findFn === n);
function findBy(array, findFn){
  for(let i=0; i<array.length; i++)
  {
    if(findFn(array[i]))
    {
      return array[i];
    }
  }
  return null;
}
