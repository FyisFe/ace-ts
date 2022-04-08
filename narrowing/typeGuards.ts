// @errors: 2531
function printAll(stars: string | string[] | null) {
  if (typeof stars === 'object') {
    for (const s of stars) {
      console.log(s)
    }
  } else if (typeof stars === 'string') {
    console.log(stars)
  } else {
    // do nothing
  }
}

printAll([])
