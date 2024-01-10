let a = 1; 
let b = 2;
let c = 3;
let d = 4;
let e = 5;

let z = '5'

console.log(a < c)
console.log(a > d)

console.log(a == b) // false
console.log(a === b) // false

// still true because we're only 'lightly' checking if they're the same
console.log(e == z) // true 

// strictly checking - e is a number and z is a string
console.log(e === z) // false 

// this is false because d is not less than a, even thought the first expression is true. 

// This is called the logical AND
a < b && d < a
console.log(a < b && d < a)

console.log(10 < 300 && 500 > 300)

// The logical OR

console.log(10 < 300 || 1 > 500) // true
console.log(1 > 500 || 1 > 200) // false

console.log(false || z === e)  // false
console.log(false || z == e) // true

console.log(1 < 10 || 1 < 5)

console.log(!false) // true 
console.log(!true) // false

console.log(!(a < b && d < a))
