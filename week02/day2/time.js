console.log('Its that time!')

// setTimeout 

// setTimeout is a function that takes two parameter - a callback function - and a number. 

function changeBG() {

    setTimeout(function() {
        // stuff I want to do after a set amount of time. 
        document.body.style.backgroundColor = 'tomato'
    }, 5000)
    // 5k miliseconds is 5 seconds. 
}

// setInterval also takes two Arguments - a function to run and how often to run it. 
const btn = document.getElementById('btn')
btn.addEventListener('click', changeBG)

const plusP = document.getElementById('plusP')
function addPlus() {
    plusP.textContent = `${plusP.textContent} +`
}

setInterval(addPlus, 1000)