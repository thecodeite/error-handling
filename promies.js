function printName () {
  buildName().then(name => {
    console.log(name)
  })
  .catch(err => {
    console.log('There was an error:', err)
  })
}

function buildName () {
  return getName().then(name => {
    return name.first + ' ' + name.last
  })
}

function getName () {
  return api().then(res => {
    return {first: res[0], last: res[1]}
  })
}

function api () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) reject(Error('Could not get name'))
      else resolve(['sam', 'plews'])
    }, 1000);
  })
}

printName()