// for loops

for (let i = 0; i < 5; i++) {
    // do stuff
    // 1st loop - i = 0
    // 2nd loop = i = 1
    // 3rd loop = i - 2
    // 4th loop = i - 3
    // 5gh loop = i - 4
    // 6th loop = i - 5

}

// data types

let string = 'string'
let number = 42
let boolean = true
const wildflowers = []
const countries =  ['south africa', 'england', 'spain', 'poland', 'wales', 'china']

console.log(countries[3])
let zero = 0

console.log(countries[5-3])

for (let i = 0; i < countries.length; i++ ) {
    console.log(countries[i])
    if (countries[i + 2] === countries[i]) {
        // then do stuff
    }
}


// while loops - while some condition is true. 

// while (!userIsNotLoggedIN) {
//     console.log('This is the truth!')
// }

// if (true) {

// }

let books = ['american pyscho', 'the white book', 'the secret history', 'art of war', 'norwegian wood', 'tai pai']

// for loops but simplier
// we dont see i? 


for (let book of books) {
    
}

let chocolates = ['dark chocolate', 'galaxy', 'toblerone', 'twix', 'flakes']

// something called a callback function
// GamepadButton.addEventListener('click', elsewhere)

// function elsewhere() {

// }
console.log()
document.addEventListener()
chocolates.forEach(function(chocolate, thisdoesntmatter) {
    console.log(thisdoesntmatter, chocolate)
})