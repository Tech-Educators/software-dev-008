function calculate(number, number2, theCallbackFunc) {
    let result = number + number2
    let finalResult = theCallbackFunc(result)
    return finalResult
}

calculate(10,2, theFuncImCallingBack)
console.log(calculate(10,2, theFuncImCallingBack))

function theFuncImCallingBack(combinedNumber) {
    return combinedNumber / 2
}

let button = document.getElementById('btn');

button.addEventListener('click', function () {
    button.style.background = 'red'
    console.log('click!')
} )