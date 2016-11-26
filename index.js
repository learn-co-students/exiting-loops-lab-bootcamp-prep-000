var breakOut = (xs, x, y) => {
  for(var i = 0; i < xs.length; i++) {
    if(xs[i] == y) break
    xs[i] = x
  }
  return xs
}

var keepGoing  = (xs, x, y) => {
  for(var i = 0; i < xs.length; i++) {
    if(xs[i] == y) continue
    xs[i] = x
  }
  return xs
}

var findBy = (xs, f) => xs.reduce( (x, y) => f(y) ? x = y : x, null )
