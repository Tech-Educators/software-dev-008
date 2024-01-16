// callbacks are functions passed as an arugment to another function. This allow a function to call another function dynamically. 

// we've used them ourselves when passing a function to an event listener!


function greet(name, job, pets) {
    console.log(`Hello ${name}, you are a ${job} and you have ${pets}`)
}

greet('Sam', 'js teacher', 'dogs')
greet('Ross')
greet('Max')

function runFunction(functionArg) {
    functionArg()
}

runFunction(function() {console.log(`I'm being run by another function!`)})
runFunction(callBackFunc)

function callBackFunc() {
    console.log(`I'm also being run by another function!`)
}


let objFunc = {
    greet: function() {
        console.log('Hello!')
    }
}

function greetObject(objectName) {
    objectName()
}


greetObject(objFunc.greet)