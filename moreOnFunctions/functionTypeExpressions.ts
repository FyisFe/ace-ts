function greeter(s: string, fn: (s: string) => void) {
  fn(s)
}

function printToConsole(s: string) {
  console.log(s)
}

greeter('hello', printToConsole)

type GreeterFunc = (s: string) => void

function newGreeter(s: string, fn: GreeterFunc) {
  fn(s)
}
