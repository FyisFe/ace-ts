const myCanvasI = <HTMLCanvasElement>document.getElementById('myCanvas');
const myCanvasII = document.getElementById('myCanvas') as HTMLCanvasElement;

// const x = "hello" as number; // error
const a = ("hello" as any) as number;