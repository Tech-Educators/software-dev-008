let thumbContainer = document.getElementById('thumb-container')
let displayImage = document.getElementById('display')

let images = [
    {
        url: `https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A happy dog`
    },
    {
        url: `https://images.unsplash.com/photo-1689182339141-ce4448e34bd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `Somesort of american racecar`
    },
    {
        url: `https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A beautiful lion`
    },
    {
        url: `https://images.unsplash.com/photo-1706087270134-436d8b4fc15b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `a frog peeking out the ater`
    }
]

const createThumbnails = (arrayOfImages) => {
    arrayOfImages.forEach(image => {
        let imgElement = document.createElement('img')
        // create an image tag

        imgElement.src = image.url
        imgElement.alt = image.alt
        // set the img tag src to be image.url
        // set alt to be image.alt

        imgElement.addEventListener('click', () => {
            createDisplayImg(image)
        }) 
        //append to thumbcontainer
        thumbContainer.appendChild(imgElement)

    
    })
}

function createDisplayImg(image) {
    displayImage.innerHTML = ''

    let largeDisplayImg = document.createElement('img')
    largeDisplayImg.src = image.url
    largeDisplayImg.alt = image.alt

    displayImage.appendChild(largeDisplayImg)

}


function arrowKeyThing(number) {
    createDisplayImg(images[whateveritshouldbe])


}

keyRight.addEventListener('click', arrowKeyThing(1))
keyLeft.addEventListener('click', arrowKeyThing(-1))


createThumbnails(images)