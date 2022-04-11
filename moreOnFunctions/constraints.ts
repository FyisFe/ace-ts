function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a
  }
  return b
}

const longestNum = longest([1, 2], [1, 2, 3])
const longestString = longest('123', '1')
// const error = longest(1, 2) // error

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type | Object {
  if (obj.length >= minimum) {
    return obj
  } else {
    return { length: minimum }
  }
}

const arr = minimumLength([1, 2, 3], 8)

function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

// const arr1 = combine([1, 2, 3], ['hello']) // error

const arr2 = combine<string | number>([1, 2, 3], ['hello'])

const arrowCombine = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.concat(arr2)
}

const arr3 = arrowCombine<string | number>([1, 2, 3], ['hello'])
