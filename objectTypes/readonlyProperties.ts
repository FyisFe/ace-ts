interface SomeType {
  readonly prop: string
}

function fn(obj: SomeType) {
  console.log(obj.prop)
  //   obj.prop = '12' // error
}

// Not Really Immutable

interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

let writablePerson: Person = {
  name: '23',
  age: 23,
}

let readonlyPerson: ReadonlyPerson = writablePerson

// readonlyPerson.age += 1 // error
writablePerson.age += 1 // works, alias can change readonly properties.
