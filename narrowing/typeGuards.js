// @errors: 2531
function printAll(stars) {
    if (typeof stars === "object") {
        for (var _i = 0, stars_1 = stars; _i < stars_1.length; _i++) {
            var s = stars_1[_i];
            console.log(s);
        }
    }
    else if (typeof stars === "string") {
        console.log(stars);
    }
    else {
        // do nothing
    }
}
printAll([]);
