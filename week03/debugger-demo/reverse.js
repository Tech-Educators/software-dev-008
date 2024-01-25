let input = document.getElementById('input')
let form = document.getElementById('form')
let result = document.getElementById('result')

form.addEventListener('submit', e => {
    e.preventDefault()
    let userInput = e.target.input.value
    result.innerText = spinWords(userInput)
})

function spinWords(str){
    let strArr = str.split(' ');
  
    strArr.forEach((element, i) => { //loop through each element in array
      if (element.length >= 5) { // check length
        let wordReversed = []; // arr to store reversed word in.
        for (let i = element.length - 1; i >= 0; i--) {
          wordReversed.push(element[i]); // loop backwards through element and push to wordReversed array. 
        }
        strArr[i] = wordReversed.join(''); // replace element[i] with its reversale. 
      }
    });
    return strArr.join(' ') // join array together. 
  }

  spinWords('Hey fellow warriors')
  console.log(spinWords('Hey fellow warriors'))