function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    return b;
}
var longestNum = longest([1, 2], [1, 2, 3]);
var longestString = longest('123', '1');
var error = longest(1, 2);
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        return { length: minimum };
    }
}
var arr = minimumLength([1, 2, 3], 8);
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// const arr1 = combine([1, 2, 3], ['hello']) // error
var arr2 = combine([1, 2, 3], ['hello']);
var arrowCombine = function (arr1, arr2) {
    return arr1.concat(arr2);
};
var arr3 = arrowCombine([1, 2, 3], ['hello']);
