const colourForm = document.getElementById('colourForm')

function changeBG(colorParam) {
    console.log('it worked!')
    document.body.style.backgroundColor = colorParam
}

function handleSubmit(event) {
    event.preventDefault();

    const myColour = event.target.colour.value
    changeBG(myColour)

    localStorage.setItem('localColour', myColour)
}

colourForm.addEventListener('submit', handleSubmit)


function loadColor() {
    const localColour = localStorage.getItem('localColour')
    changeBG(localColour)
}

loadColor()