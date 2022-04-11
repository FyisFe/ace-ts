interface SomeConstructor {
  new (s: string): Object
}

function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}

interface callOrConstruct {
  new (s: string): Object
  (s?: string): number
}

function fn2(ctor: callOrConstruct) {
  ctor()
  return new ctor('hello')
}
