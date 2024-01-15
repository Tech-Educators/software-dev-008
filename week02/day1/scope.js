// global var - we can use and change this anywhere in our program.

let thisisglobal = 'sam'

let result = '2'

function thisisHidden() {
    // this is a completely seperate var to the one above! We're NOT reassigning the value of the var on line 3, but creating a completely new one that is scoped to this function!
    let thisisglobal = 'davina'
    // private - we can't try to log this outside the function scope. 
    let private = 'manny'
    console.log(private)
    console.log(thisisglobal)
}

if (5) {
    console.log(thisisglobal)
}

function modify() {
    result = modify1()
}

modify()

function modify1() {
    result = result + '🤔'
    return result
}