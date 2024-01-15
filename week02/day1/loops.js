console.log('working')

// loops

// intitialize
// declare 

// increment
// let counter = counter + 1
// count++
// decremetn 
// let otherCounter = otherCounter - 1
// otherCounter--

// let y = 10; let x = 12
// iteration
//Iteration is the repetition of a process in order to generate a sequence of outcomes. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration.

// a basic for loop. 
// counter = counter + 1
// counter++
for (let counter = 0; counter < 120; counter = counter + 1) {
    console.log('stuff')
    // do stuff
}

// we tend to use i as a shorthand instead of counter. 

for (let i = 0; i < counter; i++) {
    // do stuff
}

// we can think of a while look like a deadly if statement
// while the condition is true, do the code between the {}'s
let varforWhile = 0

// while (!isLoggedIn) {
//     document.create
//     // do stuff
// }

// do while also exists/ 
// do {
//     // do stuff
// } while (//condition)

// if (5 == 5) {
//     //do stuf
// }

let imagesArray = [
    'https://images.unsplash.com/photo-1704409914802-4f2c5b037834?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1705065277882-b0604ec13dca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687980115-a37b56ea7271?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483197452165-7abc4b248905?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705200225027-37f2371df0e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705179910410-023d32f4613b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

// this function takes an array as an argument and loops through it creating an image tag for each of the elements in the array and appending it to the document.body. 
function displayImages(arr) {
    for (let i = 0; i < imagesArray.length; i++) {
        let img = document.createElement('img')
        img.src = arr[i] // imagesArray[i]
        document.body.appendChild(img)
    }
}


displayImages(imagesArray)

let differentImages = ['1','2','3']
displayImages(differentImages)

// for loops looping through an array. 
// note the use of videoGames.length to make sure we always hit all elements. 
let videoGames = ['baldurs gate 3', 'fox hole' , 'elden ring', ' league of legends', 'snake', 'tekken', 'dota2']

for (let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
}
