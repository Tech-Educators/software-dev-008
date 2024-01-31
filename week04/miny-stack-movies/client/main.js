const form = document.getElementById('form')
const movieContainer = document.getElementById('movie-container')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(form)
  const movieData = Object.fromEntries(formData)

  const response = await fetch('http://localhost:2222/movies', {
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
  const movies = await fetch('http://localhost:2222/movies')
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
    let pTag = document.createElement('pTag')

    h3Tag.textContent = movie.movie
    pTag.textContent = movie.year

    movieContainer.appendChild(h3Tag)
    movieContainer.appendChild(pTag)

  })
}

displayMovies()