function printText(text: string, align: 'left' | 'right' | 'center') {
    console.log(text);
}

printText('Hello', 'left');
printText('Hello', 'right');
printText('Hello', 'center');

// printText('Hello', 'bottom'); // error


function compare(a:string, b: string): -1 | 0 | 1 {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

interface Options {
    width: number;
}

function configure(x: Options | "auto"): void {
    console.log(x);
}

configure({ width: 100 });
configure("auto");
// configure("automargin"); // error