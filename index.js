function breakOut(array, changeValue, stopValue) {
  for(let i = 0, l = array.length; i < l; i++){
    if (array[i] !== stopValue){
     array[i] = changeValue;
 }
      else if (array[i] === stopValue){
        break
      }
   }
   return array
}   //IS WORKING ON CONSOLE...KEEP GOING FOR NOW!!

function keepGoing(array, changeValue, skipValue) {
  for(let i = 0, l = array.length; i < l; i++){
    if (array[i] !== skipValue){
     array[i] = changeValue;
 }
      else if (array[i] === skipValue){
        continue;
      }
   }
   return array
}   //IS WORKING ON CONSOLE...KEEP GOING FOR NOW!!

function findBy(array, findFN){
  for(let i = 0, l = array.length; i < l; i++){
    if(findFN(array[i])){
      return array[i];
    }
  }
  return null;
}
