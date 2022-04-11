function fn(arr: any[]) {
  return arr[0]
}

function fnGeneric<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

fnGeneric([1, 2, 3])
fnGeneric([])
fnGeneric(['1'])

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func)
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))
