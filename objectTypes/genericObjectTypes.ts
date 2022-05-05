interface Box {
  content: any // the box can contain any type of data
}

// The you need tons of Box
// Number Box
// String Box
// ....

interface GenericBox<T> {
  content: T
}

const numberBox: GenericBox<Number> = {
  content: 123,
}

const stringBox: GenericBox<String> = {
  content: '123',
}

function setBoxContent<T>(box: GenericBox<T>, content: T) {
  box.content = content
}

setBoxContent(numberBox, 123)

type OrNull<Type> = Type | null

type OneOrMany<Type> = Type | Type[]

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>

type OneOrManyOrNullStrings = OneOrManyOrNull<string>
