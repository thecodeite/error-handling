function printName () {
  try {
    const name = buildName ()
    console.log(name)
  } catch (e) {
    console.log('There was an error:', e)
  }

}

function buildName () {
  const name = getName ()
  return name.first + ' ' + name.last
}

function getName () {
  const res = api()
  if (res.length < 2) throw new Error('Names have 2 parts!')
  return {first: res[0], last: res[1]}
}

function api () {
  if (Math.random() > 0.2) throw Error('Could not get name')
  return ['sam', 'plews']
}

printName()