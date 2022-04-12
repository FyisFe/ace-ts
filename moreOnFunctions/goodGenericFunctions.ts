function goodOne<T>(arr: T[]): T {
  return arr[0]
}

function badOne<T extends any[]>(arr: T) {
  return arr[0]
}

goodOne([1, 2, 3]) // return number
badOne([1, 2, 3]) // return any

function goodFilter<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func)
}
