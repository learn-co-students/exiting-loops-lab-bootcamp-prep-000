function breakOut(array, changeValue, stopValue)
{
  for(let i=0; i<array.length;i++)
  {
    if(array[i]===stopValue)
    {
      return array
    }
    else {
      array[i]=changeValue
    }
  }
}
function keepGoing(array,changeValue,skipValue)
{
  for(let i=0;i<array.length;i++)
  {
    if(array[i]===skipValue)
    {
      continue
    }
    else {
      {
        array[i]=changeValue;
      }
    }
  }
  return array
}
function findBy(array,findFn)
{
  var value
  for(var i=0;i<array.length;i++)
  {
    if (findFn(array[i]))
    {
      value = array[i]
      return value
    }
  }
  return null
}
