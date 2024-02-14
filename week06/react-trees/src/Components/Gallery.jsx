import {useState, useEffect} from "react"

export default function Gallery() {
    console.log('Gallery component running...')

    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState('')
    const [userInput, setInput] = useState('')

    async function getPhotos(queryParam) {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84`)
        const data = await response.json()
        console.log(data)
        setPhotos(data.results)
    }

    useEffect(() => {
        console.log('useEffect Running')
        // some special code 
        // that i dont need to do every time my component re-redners. 
        getPhotos(query)
    }, [query])

    console.log(photos)

    return (
        <div>
            <p>{userInput}</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                setQuery(userInput)
            }}>
                <input onChange={(e) => {
                    setInput(e.target.value)
                }}/>
            </form>
            {photos.map((photo) => (
                <div key={photo.id}>
                    <img src={photo.urls.regular} /> 
                </div>
            ))}
        </div>
    )
}

// onchange (useState to update whatever the person is typing)
// onSubmit (so that whenever the person submits the form, I go fetch whatever query they've made. )





{/* <form>
    <input id='input'/>
</form>

let textinput = ''

let input = document.getElementById('input')

input.addEventListener('onchange', (e) => {
    textinput = e.target.value
}) */}