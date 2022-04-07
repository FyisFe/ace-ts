function printText(text, align) {
    console.log(text);
}
printText('Hello', 'left');
printText('Hello', 'right');
printText('Hello', 'center');
// printText('Hello', 'bottom'); // error
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function configure(x) {
    console.log(x);
}
configure({ width: 100 });
configure("auto");
// configure("automargin"); // error
