var breakOut = function(array, changeValue, stopValue){
    for(let i=0, l=array.length; i < l; i++) {
        if (array[i] === stopValue) {
            break;
        }
        array[i] = changeValue;
    }
    return array;
};

var keepGoing = function(array, changeValue, skipValue){
    for(let i=0, l=array.length; i < l; i++) {
        if (array[i] === skipValue) {
            continue;
        }
        array[i] = changeValue;
    }
    return array;
};

var findBy = function(array, findFn){
    return array.find(findFn);
};
