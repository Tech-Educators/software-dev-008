const form = document.getElementById('form')
const movieContainer = document.getElementById('movie-container')

let x = document.createElement('p')

x.textContent = 'hello'

document.body.appendChild(x)

x.addEventListener('click', () => {
  console.log('click')
})

const baseURL = 'http://localhost:4242'

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  // names matter on input elements. 
  // {
  //   movie: thatInputsValue,
  //   year: theOtherINputValue,
  //   imgURL: 'somestirng'
  // }
  const formData = new FormData(form)
  const movieData = Object.fromEntries(formData)

  const response = await fetch(`${baseURL}/movies`, {
    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(movieData)
  })
  // if I know the request was successful 
  if (response.ok) {
    // redisplay movies
    displayMovies()
  } else {
    console.error('Failed to add movie', response.status)
  }
})


// fetches all movies and returns that. 
async function fetchMovies() {
  const movies = await fetch(`${baseURL}/movies`)
  // parsed into an array instead of being json. 
  let result = await movies.json()
  return result
}

async function displayMovies() {
  // movies is an array of all movies in my db
  let movies = await fetchMovies()

  movieContainer.innerHTML = ''
  movies.forEach(movie => {

    let h3Tag = document.createElement('h3')
    let pTag = document.createElement('p')
    let imgTag = document.createElement('img')
    let delButton = document.createElement('p')

    let infoDiv = document.createElement(`div`)
    let movieCard = document.createElement('div')

    h3Tag.textContent = movie.movie
    h3Tag.setAttribute('class', 'movieTitle')
    pTag.textContent = movie.year
    imgTag.src = movie.imgURL
    delButton.textContent = 'X'


    delButton.addEventListener('click', (e) => {
      e.preventDefault()
      handleDelete(movie.id)
    })

    infoDiv.appendChild(h3Tag)
    infoDiv.appendChild(pTag)
    movieCard.appendChild(delButton)
    movieCard.appendChild(infoDiv)
    movieCard.appendChild(imgTag)

    movieContainer.appendChild(movieCard)

  })
}

displayMovies()

async function handleDelete(id) {
  const result = await fetch(`${baseURL}/movies/${id}`, {
    method: "DELETE"
  })
  console.log(result)
  if (result.ok) {
    displayMovies()
  }
}

// get post

// update delet