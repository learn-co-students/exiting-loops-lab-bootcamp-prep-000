
function breakOut(array, changeValue, stopValue)
{
  for(let i=0;i<array.length;i++){
    if(array[i] === stopValue){
      break
    }
    else{
      array[i]=changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue)
{
  for(let i=0;i<array.length;i++){
    if(array[i] === skipValue){
      continue;
    }
    else{
      array[i]=changeValue;
    }
  }
  return array;
}


function findBy(array, findFn) {
let a;
for(let i=0;i<array.length;i++) {

  
    if (findFn(array[i])!==true) {
      a=null;
      
    } 
    if (findFn(array[i])===true) {
      a=array[i];
    break;
    } 
  
  
  }

return a;
     }

