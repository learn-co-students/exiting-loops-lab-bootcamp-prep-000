function breakOut(arr, cVal, sVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == sVal) {
            break;
        } else {
            arr[i] = cVal;
        }
    }
    return arr
}

function keepGoing(arr, cVal, sVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == sVal) {
            continue;
        } else {
            arr[i] = cVal;
        }
    }
    return arr
}

function findBy(arr, findFn) {
    for (var i = 0; i < arr.length; i++) {
        if (findFn(arr[i])) {
            return arr[i]
        }
    }
    return null
}
