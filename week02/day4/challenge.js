// warm up exercise 

// write a function that takes an array of numbers as an argument and returns the sum of the numbers 

// @params - An array of numbers [1,2,3,4] [Number, Number]
// @return - The sum of the numbers in the array: Number

function AddNumbers(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

console.log(AddNumbers([1,2,3,4,5]))

const addArr = (sdfawefwerfwf) => { 
    return sdfawefwerfwf.reduce((sum, current) => sum + current, 0)
}

// 1,2,3,4,5]

const addArrayWithArrow = function(arr) {
    return arr.reduce(function (accum, current) {
        return accum + current
    }, 0)
}

// function declaration

// function expression 
const myFunc = function () {

}

const myArr = (sum , current) => {

}
console.log(addArr([1,2,3,4,5]))