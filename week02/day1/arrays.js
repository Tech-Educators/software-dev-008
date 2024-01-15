// primatives
let myString = 'its a string!'
let myNumber = 42
let myBoolean = true
myBoolean = false

// non-primatives

// arrays are just a list of values
// arrays are zero-indexed
const myArray = [42, 'its a string!', true, 'ineedanotherstring', false]

// we can make an empty array like this. 
let mySecondArrayBecauseIWasntRecording = []


myArray[myArray.length - 1] = 'thisisthelast!!!!!!'
let myNumberFourtyTwo = myArray[0] // 42
let myBooleanInTheArray = myArray[2] // true
console.log(myNumberFourtyTwo.length) // 5 (how many things are inside the array?)

// we can also use variables/maths inbetween the [] when accessing an array.
let x = 2
myArray[x] // true
myArray[2] // true

let y = myArray[myArray.length - 1]
console.log(y)

console.log(myArray[99]) // undefined

// we can describe an array of being made up of 'elements'
let mySecond = ['string', 'string2', 'string3', 'string4', 'string5'] // length of 5

mySecond[0] // string
mySecond[1] // string2
mySecond[2] // string3
mySecond[3] // string4
mySecond[4] // string5

// doing the legnth of the array - 1 will always give you the last element of the array!
mySecond.length  - 1 // 5 - 1 = 4. 