function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
myForEach([1, 2, 3], function (a, i) { return console.log(a, i); });
// When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
myForEach([1, 2, 3], function (a, i) {
    console.log(i.toFixed());
});
