function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)

// @errors: 2394
function functionOverLoads(x: string): string
// Return type isn't right
// function functionOverLoads(x: number): number
function functionOverLoads(x: number): string
function functionOverLoads(x: string | number) {
  return 'oops'
}

functionOverLoads(1)

function len(s: string): number
function len(arr: any[]): number
function len(x: any) {
  return x.length
}

len('') // OK
len([0]) // OK
// len(Math.random() > 0.5 ? "hello" : [0]); //error

function lenUnionType(x: any[] | string) {
  return x.length
}

lenUnionType(Math.random() > 0.5 ? 'hello' : [0])
