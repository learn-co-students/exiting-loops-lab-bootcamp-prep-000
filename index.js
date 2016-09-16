function breakOut(array, changeValue, stopValue)
{
  //iterates through array
  for(var i = 0; i < array.length; i++)
  {
    //returns array at stop value
    if(array[i] === stopValue){
      return array;
    }
    //breaks out of loop, returns array
    array[i] = changeValue;
  }

}

function keepGoing(array, changeValue, skipValue)
{
  for(var i = 0; i < array.length; i++)
  {
    if(array[i] === skipValue)
    {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn)
{
  for(var i = 0; i < array.length; i++)
  {
    if(findFn(array[i]))
    {
      return array[i];
    }
  }
  return null;
  }
