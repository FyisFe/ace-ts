var cc = {
    color: 'red',
    radius: 42
};
function draw(circle) {
    console.log("Color was ".concat(circle.color));
    console.log("Radius was ".concat(circle.radius));
}
draw({ color: 'blue', radius: 42 });
var converter = {
    convert: function (value) {
        return (typeof value === 'string' ? Number(value) : String(value)); // type assertion is an unfortunately necessary hack.
    }
};
