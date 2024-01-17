let variableName = 'something'
variableName = 'something else'

let anotherVar = 'wow1'

const thisCntBeChanged = 32
// thisCntBeChanged = 42

function changeVar(variable) {
    variable = 'something completely different'
    // console.log('wow!!')
    return variable
}

let myChangedVar = changeVar(variableName)
let myOtherChangedVar = changeVar(anotherVar)

console.log(myChangedVar)
console.log(myOtherChangedVar)

// let const, 
// functions declarations (this exists!)
// function invocation - (i will actually run the function)

// data types

// boolean (true/false), strings, numbers 
// objects and arrays. 

// arrays are zero-indexed - they start at 0 
let myArr = [42, 'string', true, [], {name: 'sam'}]

// when we want to access someting in an array, we type the array name and [index]

let myObj = {
    // key - value pairs comma seperated
    name : 'sam',
    age: 24,
    hairLong: true,
    pets: ['Charlie', 'Darcy', ],
    collection: {
        thisthing: {
            locations: ['germany', 'korea', 'england']
        }
    },
    greet: function() {
        console.log("Hello ," + myObj.name)
        console.log(`This is a ${myObj.hairLong} string!`)
    }
}

// we can use dot notation to access properties of an object. 

// myObj.greet()

myObj.favColours = ['red', 'green', 'generic']

// console.log(myObj)


// get my variable with document.getElementById('id-name')

// first thing it takes is a string that represents what we're listening for. 
// var.addEventListener('click', function() {
//     // imagine it had stuff inside
// })

// addEventListener('click', changeVar)

// for (some coutner ; a condition; something to change the counter/effect the condition) {
// // do stuff
// //}
for (let i = 0; i < 5; i++) {

    console.log(i)
    // do stuff each iteration of the loop.
}

// while () {
//  // boolean true and false

//  // 5 = truthy
//  // 'string' = truthy
//  // '' = falsy
//  // 0 = falsy. 

// }

// global scope - accessed anywhere
// block scope - local to that block 

if (true) {
    let myPrivteVar = 'something'
} else if (5) {
    // do something else
} else {
    // default
}


let myForEachArray = [1,2,3,4,5]

// takes a function to run for eachThing inside my array
myForEachArray.forEach(function(element) {

    console.log(element * 2)
})
let result = ''
for (let i = 0; i < myForEachArray.length; i++) {
    result += result + '#'
    console.log(result)
}