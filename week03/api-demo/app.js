const form = document.getElementById('form')
const imagecontainer = document.getElementById('img-container')

const announcer = document.getElementById('announcer')

let randomButton = document.getElementById('randomize-button')

let images = []
let currentImgIndex = 0

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event)
    let query = event.target.input.value
    search(query)

})

async function search(queryParam) {
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84`)
    let data = await response.json()
    images = data.results
    createImages(images[currentImgIndex])
}

function createImages(image) {
    imagecontainer.innerHTML = ''
    let imgTag = document.createElement('img')
    imgTag.src = image.urls.raw
    imgTag.alt = image.alt_description // set our alt tag for screenreaders

    imagecontainer.appendChild(imgTag)
    annouceAltText(image.alt_description)

}

function annouceAltText(altText) {
    announcer.textContent = `New image displayed: ${altText}`
}

randomButton.addEventListener('click', function() {
    if (images.length > 0) {
        currentImgIndex = Math.floor(Math.random() * images.length);
        createImages(images[currentImgIndex])
    }
})