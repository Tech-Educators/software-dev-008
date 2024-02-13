import {useState, useEffect} from "react"

export default function Time() {
    const [count, setCount] = useState(0)

    console.log(count)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => clearInterval(interval)
    } 
    , [])

    return (
        <p>{count}</p>
    )
}