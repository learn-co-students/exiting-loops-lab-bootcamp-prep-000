function breakOut(array, changeValue, stopValue){
for(var i = 0; i < array.length; i++){
if(array[i] != stopValue){
array.splice(i,1,changeValue);
}else{
break;
}
}
 return array;
}

function keepGoing(array, changeValue, skipValue){
for(var i = 0; i < array.length; i++){
if(array[i] != skipValue){
array.splice(i,1,changeValue);
}
}
return array;
}

function findBy(array, findFn){
 for(var i = 0; i < array.length; i++){
   if(findFn(array[i])){
     return array[i];
   }
 }
 return null;
}
