function printName () {
  const name = buildName ()
  if ( name instanceof Error) {
    console.log('There was an error!', name)
  } else {
    console.log('Name is ' + name)
  }
}

function buildName () {
  const name = getName ()
  if ( name instanceof Error) {
    return name
  }
  return name.first + ' ' + name.last
}

function getName () {
  const res = api()
  if (res === null) {
    return new Error('No name');
  }
  return {first: res[0], last: res[1]}
}

function api () {
  if (Math.random() > 0.2) return null;
  return ['sam', 'plews']
}

printName()