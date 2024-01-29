let thumbContainer = document.getElementById('thumb-container')
let displayImage = document.getElementById('display')

let currentImageIndex = 0

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
    arrayOfImages.forEach((image,index) => {
        let imgElement = document.createElement('img')
        // create an image tag

        imgElement.src = image.url
        imgElement.alt = image.alt
        // set the img tag src to be image.url
        // set alt to be image.alt

        imgElement.addEventListener('click', () => {
            createDisplayImg(image, index)
        }) 
        //append to thumbcontainer
        thumbContainer.appendChild(imgElement)

    
    })
}

function createDisplayImg(image, index) {
    displayImage.innerHTML = ''

    let largeDisplayImg = document.createElement('img')
    largeDisplayImg.src = image.url
    largeDisplayImg.alt = image.alt

    currentImageIndex = index

    displayImage.appendChild(largeDisplayImg)

}


function selectNextImage (number) {
    currentImageIndex += number // add one or take away 1
    // check we're not overflowing in either direction.
    if (currentImageIndex >= images.length) currentImageIndex = 0
    if (currentImageIndex < 0) currentImageIndex = images.length - 1

    createDisplayImg(images[currentImageIndex], currentImageIndex)
}

document.getElementById('keyRight').addEventListener('click', () => selectNextImage(1))
document.getElementById('keyLeft').addEventListener('click', () => selectNextImage(-1))

window.addEventListener('keydown', handleArrowKeyPress);

function handleArrowKeyPress(event) {
    if (event.key === 'ArrowRight') {
        selectNextImage (1);
    } else if (event.key === 'ArrowLeft') {
        selectNextImage (-1);
    }
    console.log(event.key)
}


createThumbnails(images)
createDisplayImg(images[currentImageIndex], currentImageIndex)