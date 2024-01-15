// function declaration. 

function theNameOfTheFunc() {
    if (10 > 5) {
        console.log('10 is greater than 5!')
    } else {
        console.log('Maths is broken!')
    }
}

// here we are invoking/calling the functions
theNameOfTheFunc()

// parameters and arguments. 

// x + y = 10
// 5 + y = 10 

// x and y are parameters 
function sum(x, y) {
    return x + y 
}

function divide(x, y) {
    console.log(x / y)
}

// 123123, 12312312 are arguments. 
let result = sum(2,4)
let divResult = divide(10,5)

console.log(result)
console.log(divResult)