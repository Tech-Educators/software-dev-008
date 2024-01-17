const reallyCoolObject = {
    favAnimal: 'Darcy',
    favNumber: 43,
    favPlace: 'Tech Educators (Hawaii campus)',
    favList: [1,2,3]
}

// PUT THING IN LOCAL STORAGE
// STEP 1
const stringified = JSON.stringify(reallyCoolObject)

// local stroage only wants strings. 
// set wiht a key and a value
localStorage.setItem('myInfo', stringified)

// GET SOMETHING FROM LOCAL STORAGE

const myLocalObj = localStorage.getItem('myInfo')
console.log(myLocalObj)


// PUT BACK INTO AN OBJECT:

const parsedObject = JSON.parse(myLocalObj)

console.log(parsedObject.favAnimal)