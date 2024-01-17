const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    let inputValue = event.target.input.value
    console.log(event)
    console.log(inputValue)
} )

const input = document.getElementById('input')

input.addEventListener('input', function(event) {
    event.preventDefault()
    console.log(event.target.value)
})

let complexForm = document.getElementById('complex-form')

complexForm.addEventListener('submit', function(event) {
    event.preventDefault()

    // please create 
    const formData = new FormData(event.target)

    // please create me a normal object from the horrible formData object 
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    // const inputValue = formData.get('input2')
    // console.log(inputValue)
})

let myObj = {
    name: 'sam',
    age: 24
}