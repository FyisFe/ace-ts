interface BasicAddress {
  name?: string
  street: string
  city: string
  country: string
  postalCode: string
}

interface AddressWithUnit extends BasicAddress {
  unit: string
}

interface Colorful {
  color: string
}

interface BasicCircle {
  radius: number
}

interface ColorfulCircle extends Colorful, BasicCircle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
}

type intersectColorfulCircle = Colorful & BasicCircle

function draw(circle: intersectColorfulCircle) {
  console.log(`Color was ${circle.color}`)
  console.log(`Radius was ${circle.radius}`)
}

draw({ color: 'blue', radius: 42 })
// draw({ color: 'blue', raduis: 42 }) // error(Typo)

// difference:

// interface NumberToStringConverter {
//   convert: (value: number) => string
// }

// // error
// interface BidirectionalStringNumberConverter extends NumberToStringConverter {
//   convert: (value: string) => number
// }

type NumberToStringConverter = {
  convert: (value: number) => string
}

type BidirectionalStringNumberConverter = NumberToStringConverter & {
  convert: (value: string) => number
}

const converter: BidirectionalStringNumberConverter = {
  convert: (value: string | number) => {
    return (
      typeof value === 'string' ? Number(value) : String(value)
    ) as string & number // type assertion is an unfortunately necessary hack.
  },
}
