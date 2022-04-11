function fn(arr) {
    return arr[0];
}
function fnGeneric(arr) {
    return arr[0];
}
fnGeneric([1, 2, 3]);
fnGeneric([]);
fnGeneric(['1']);
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(['1', '2', '3'], function (n) { return parseInt(n); });
