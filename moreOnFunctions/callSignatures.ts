type DescribableFunction = {
  description: string
  (x: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6))
}
