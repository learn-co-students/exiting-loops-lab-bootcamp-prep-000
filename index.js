function breakOut ( array, changeValue, stopValue ) {
  for ( let i = 0, l = array.length; i < l; i++ ) {
    if ( array[i] === stopValue ) {
      break ;
    } array[i] = changeValue ;
  } return array ;
}

function keepGoing ( array, changeValue, skipValue ) {
  for ( let i = 0, l = array.length; i < l; i++ ) {
    if ( array[i] === skipValue ) {
      continue ;
    } array[i] = changeValue ;
  } return array ;
}

function findBy ( array, findFn ) {
  for ( let i = 0, l = array.length; i < l; i++) {
    if ( findFn ( array[i] )) {
      return array[i] ;
    }
  } return null ;
}



const person = {
  name: "Awesome Name" ,
  occupation: {
      title: "Senior Manager of Awesome" ,
      yearsHeld: 2
  },
  pets: [{
      kind: 'dog' ,
      name: 'Fiona'
  } , {
      kind: 'cat' ,
      name: 'Ralph'
  }]
}

function find ( array, criteriaFn ) {
  for ( let i = 0, l = array.length; i < l; i++ ) {
    if (criteriaFn ( array[i] )) {
      return array[i] ;
    }
  }
}

function find ( array, criteriaFn ) {
  let current = array ;
  let next = [] ;
  while ( current ) {
    if ( criteriaFn ( current )) {
      return current ;
    }
    if ( Array.isArray (current) ) {
      for ( let i = 0, l = current.length; i < l; i++ ) {
        next.push ( current[i] ) ;
      }
    }
    current = next.shift() ;
  }
  return null ;
}
