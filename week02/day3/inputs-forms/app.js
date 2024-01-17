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

    // please create a new FormData object
    // new is a keyword in js 
    // formdata is an builtin function that creates formData 'instances'
    // it accepts a form as its argument. 
    const formData = new FormData(event.target)

    // please create me a normal object from the horrible formData object with this horrible line of code. 
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    // const inputValue = formData.get('input2')
    // console.log(inputValue)
})

// (anon) arrow functions
form.addEventListener('click', (e) => {

})

// even more confusing 

form.addEventListener('click', e => {})

// normal anonymous function 
form.addEventListener('click', function(event) {
    
})

```
```

function myFunc() {}

let myfuncExpression = function() {}

const arrowFunc = () => {}