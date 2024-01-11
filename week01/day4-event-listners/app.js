console.log('Hello, events!')

// let backgroundColor = 'teal'

const colorBtn = document.getElementById('the-button')

function changeColour() {
    // console.log('test')
    if (document.body.style.background == 'red') {
        document.body.style.background = 'steelblue'
    } else {
        document.body.style.background = 'red'
    }
}

// function greetandDog(name, dogname) {
//     console.log('Hello ' + name + ' ' + dogname)
// } 

// greetandDog('Sam')
// first argument is the event you're listening for. This will be a string. 
// what we want to do when someone clicks on our button.
colorBtn.addEventListener('mouseover', changeColour)
