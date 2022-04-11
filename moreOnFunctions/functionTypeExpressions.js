function greeter(s, fn) {
    fn(s);
}
function printToConsole(s) {
    console.log(s);
}
greeter('hello', printToConsole);
function newGreeter(s, fn) {
    fn(s);
}
