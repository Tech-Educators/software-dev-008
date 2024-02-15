import {useState, useEffect} from 'react'

export default function Timer({count, setCount}) {
    

    useEffect(() => {
        // only do the code inside here when I specify, not on every component re-render. 
        // go change tires
        const interval = setInterval(() => {
            // functional update
            setCount(preCount => preCount + 1 )
            // idk normal update
            // setCount(count + 1)
        }, 1000)


        return () => clearInterval(interval) // stop the intervals runnings. cleanUpFunction 
    },[])

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    )
}
