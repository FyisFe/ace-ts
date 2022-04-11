interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}

function handleShape(shape: Shape) {
  if (shape.kind === 'rect') {
    console.log(123)
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
  }
}

function getAreaGuarantee(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius! ** 2
    case 'square':
      return shape.sideLength! ** 2
  }
}

interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type NewShape = Circle | Square

function newGetArea(shape: NewShape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
  }
}
