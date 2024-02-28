'use client'
import {useState} from 'react'

const Footer = () => {
    console.log('component re-rendering')

    // just returns an array
    // state variable 
    // function to update the value of the statevariable
    // sets the intial state of count to be 0
    const [count, setCount] = useState(0)

    // count is 0
    // only goes up by one
    // go up by three. 

    // we only pass a callback function to the setState function when we need the preivous value of the state variable 'between' rerenders. 
   function handleClick() {
    setCount(dsfasdf => dsfasdf + 1)
    setCount(prev => prev + 1) // 
    setCount(prev => prev + 1)
   }

   // doesn't work - react 'batches' numbers
   function handleClick() {
    setCount(count + 1)
   }
   // the actual SETTING only happens after the component finishes rerendering. 

    return (
      <footer className="text-white text-center py-4">
        <div className="max-w-6xl mx-auto px-4">
            <p onClick={handleClick}>\\\\  {count} ////</p>
          <p>© 2024 Space Explorer. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

  let total = 0;

  function sum() {
    return Math.floor(Math.random() * 3)
  }

  total = sum()
  total = sum()
  total = sum()