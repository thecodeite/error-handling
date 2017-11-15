function printName () {
  buildName ((err, name) => {
    if (err) console.log('Error:', err)
    else console.log(name)
  })

}

function buildName (callback) {
  getName ((err, name) => {
    if (err) callback(err)
    else callback(null, name.first + ' ' + name.last)
  })
}

function getName (callback) {
  try{
    api((err, res) => {
      if (err) callback(err)
      else callback(null, {first: res[0], last: res[1]})
    })
  } catch(e) {
    console.log('Got error at get nam:', e)
  }
}

function api (callback) {
  if (Math.random() > 0.9) throw 'i will be caught'
  setTimeout(() => {
    if (Math.random() > 0.8) throw 'error'
    if (Math.random() > 0.7) return new Error('i am useless')
    if (Math.random() > 0.5) callback(new Error('Could not get name'))
    else callback(null, ['sam', 'plews'])
  }, 1000);
}

printName()
for(let i=0; i<1000000; i++) {
  console.log(i);
}
