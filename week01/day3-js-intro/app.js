console.log('Is this working!')

// variables are a way to store a value with a name
let myString = 'string'
myString = 'sam'
const myNumber = 42
// this will cause an error - we can't reassign constant values
// myNumber = 423

console.log(typeof 'hello') //string
console.log(typeof 344)
console.log(typeof true)

let thisVarIwatntobeempty = null
let thisVarDoesntExist;
console.log(thisVarDoesntExist)
console.log(thisVarIwatntobeempty)

// these are values
'string' // string 
32 // number 
false // boolean
true // also boolean


// simple operators

let sum2 = 1 + 1 // 2
let difference = 1 - 1 // 0
let produce = 2 * 2 // 4
let divide = 10 / 2 // 5
let remainder = 5 % 2 // 1 - this is called the modulo operator

let counter = 5

counter = counter + 1 // 6
counter++ 
counter += 5

// decrement
 counter = counter - 1
 counter--
 counter -= 5

 let x = 5
 let y = x

 // function declaration

 function greet() {
    console.log('Hello, software dev 08')
 }

// invoke the function
 greet()
 greet()
 greet()
 greet()

 console.log(greet())
 console.log(greet)

 // function with parameters
// we call these parameters
 function greetByName(theName) {
    console.log('Hello ' + theName)
 }

 // when we invoke the function we provide it the 'argument' - this is what value will replace the parameter 'theName'
 greetByName('Sam')
 greetByName('Davina')

 let myDogName = 'Darcy '
 function greetMyDog() {
    console.log('Hello ' + myDogName)
 }

 function sum(a, b) {
    console.log(a + b)
 }

let myName = 'Sam'

console.log(`Hello ${myName}`)
