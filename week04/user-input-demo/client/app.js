const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // horrible stuff.
  // create formData object and turn it into normal object. 
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  // fetch can also take an options object. 
  fetch('http://localhost:6060/messages', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
})

// {}

async function getMessages() {
  
}

// const myObj = new Object()
// myObj.tree = 'willow'
// const myObjectNormal = {}
// myObjectNormal.nomral = 'this is normal'


// we're not doing async
// stringify vs .json() ?/!?!?!