interface ShapeOP {}
declare function getShape(): ShapeOP

interface PaintOptions {
  shape: ShapeOP
  xPos?: number
  yPos?: number
}

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos

  let yPos = opts.yPos === undefined ? 0 : opts.yPos
}

function deconstrctPaintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(xPos)
  console.log(yPos)
}
const shape = getShape()
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, yPos: 100 })
paintShape({ shape, xPos: 100, yPos: 100 })
