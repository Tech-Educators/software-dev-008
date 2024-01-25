// implement the functions to pass as many of the tests in js-challenges.test.js as you can


export function sum(a, b) {
    return (a + b);
}

export function subtract(a, b) {
    //implement function
}

export function multiply(a, b) {
    //implement function
}

export function divide(a, b) {
    //implement function
}


// these are much much harder - it's a huge stretch goal, don't worry about getting these done.
export function isPalindrome(str) {

    'hello'.replace('l', '') // heo

    'hello'.split('') // ['h', 'e','l','l','o']
    let betterString = str.replace(/[\W]/g, '').toLowerCase()
    let reversedString = betterString.split('').reverse().join('')
    return betterString === reversedString


    // make a string to compare to the input string. 

    // for (let i = betterString.length - 1; i >= 0; i--) {
    //     reversedString += betterString[i]
    // }

    // for (let i = 0; i < betterString.length; i++) {
    //     if (reversedString[i] !== betterString[i]) {
    //         return false
    //     }
    // }
    // return true
}

isPalindrome('hello ! sdfsdR@AAA')

export function isAnagram() {
  // implement function
}

export function countLetters() {
  // implement function
}