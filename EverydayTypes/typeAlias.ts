type Point = {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log(`x: ${pt.x}, y: ${pt.y}`);
}

printCoord({ x: 1, y: 2 });