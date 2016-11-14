function breakOut(array, changeValue, stopValue)
{
    array.forEach((item, i) => {
        if (item == stopValue) {
            return;
        }
        array[i] = changeValue;
    });
    return array;
}

function keepGoing(array, changeValue, skipValue)
{
    array.forEach((item, i) => {
        if (item != skipValue) {
            array[i] = changeValue;
        }
    });
    return array;
}

function findBy(array, findFn)
{
    let result = null;
    for (var i = 0; i < array.length-1; i++) {
        if (array[i] == findFn)
        {
            result = findFn;
        }
    }
    return result;
}
