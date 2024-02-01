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

    // updates inputs 
    const updateDiv = document.createElement('div')
    const updateYear = document.createElement('input')
    updateYear.setAttribute('name', 'year')
    updateYear.value = movie.year
    const updateMovie = document.createElement('input')
    updateMovie.setAttribute('name', 'movie')
    updateMovie.value = movie.movie
    const updateImgUrl = document.createElement('input')
    updateImgUrl.setAttribute('name', 'imgURL')
    updateImgUrl.value = movie.imgURL
    const updateButton = document.createElement('button')
    updateButton.textContent = 'update'
    const updateForm = document.createElement('form')
    updateButton.setAttribute('type', 'submit')

    // listen to changes on form
    updateForm.addEventListener('submit', e => {
      e.preventDefault()
      const formData = new FormData(updateForm)
      const info = Object.fromEntries(formData)
      console.log(info)
      handleUpdate(movie.id, info)
    })

    updateForm.appendChild(updateMovie)
    updateForm.appendChild(updateYear)
    updateForm.appendChild(updateImgUrl)
    updateForm.appendChild(updateButton)
    updateDiv.appendChild(updateForm)

    delButton.addEventListener('click', (e) => {
      e.preventDefault()
      handleDelete(movie.id)
    })

    infoDiv.appendChild(h3Tag)
    infoDiv.appendChild(pTag)
    movieCard.appendChild(delButton)
    movieCard.appendChild(infoDiv)
    movieCard.appendChild(imgTag)
    movieCard.appendChild(updateDiv)

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

async function handleUpdate(id, updatedInfo) {
  const result = await fetch(`${baseURL}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(updatedInfo)
  })

  if (result.ok) {
    displayMovies()
  }
}
// get post

// update delet


// for each of the moives

// create an input for the movie title, imgurl year. 
// set the vlaues of each of those inputs to be whatever the current value is of that movie 
// add a button to submit 
// when submit make a put request. 