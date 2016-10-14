function breakOut(array, changeValue, stopValue){
  for(var i in array){
    if(array[i]==stopValue)break
    array[i]=changeValue
  }
  return array
}
function keepGoing(array, changeValue, skipValue){
  array.forEach((e,i,a)=>{if(e!=skipValue)a[i]=changeValue})
  return array
}
function findBy(array, findFn){
  for(var i in array){
    if(findFn(array[i]))return array[i]
  }
  return null
}
