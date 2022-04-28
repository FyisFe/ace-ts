interface StringArray {
  [index: number]: string // index must be either number or string
}
declare function getStringArray(): StringArray

const myArray: StringArray = getStringArray()
const secondItem = myArray[1] // string

// possible to support both

interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

// Returned by number index should be the subType of String index,
// because JS convert number to string, they should be consistent

interface NotOkay {
  [x: number]: Animal
  [x: string]: Dog
}

interface Okay {
  [x: string]: Animal
  [x: number]: Dog
}

declare function getOkay(): Okay
const okayArray: Okay = getOkay()
const itemStr = okayArray['1'] // Dog
const itemNum = okayArray[1] // Dog

declare function getNotOkay(): NotOkay
const NotOkayArray: NotOkay = getNotOkay()
const NotOkitemStr = NotOkayArray['1'] // Animal
const NotOkitemNum = NotOkayArray[1] // Animal

interface NumberDictionary {
  [index: string]: number

  length: number // ok
  name: string // not align with index signature
}

interface NumberOrStringDictionary {
  [index: string]: number | string

  length: number // ok
  name: string // fine
}

interface ReadOnlyNumberOrStringDictionary {
  readonly [index: string]: number | string

  length: number // ok
  name: string // fine
}
