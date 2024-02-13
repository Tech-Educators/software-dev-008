import { useState } from "react"
import {greet, goodBye} from "./Example"
import React from "react"


export default function UseStateAndConditional() {
    const [count, setCount] = useState(0)
    const [form, setForm] = useState({
        name: 'Sam',
        age: 20
    })

    console.log(form)

    // some func is called by handleClick (someFunc is a parameter - it gets what function it needs to be when it is invoked inside our buttons onClick)
    function handleClick(someFunc) {
        someFunc()
    }

    function handleUpdateCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={handleUpdateCount}>Add one</button>
            <button onClick={() => {handleClick(greet)}}>Say Hello</button>
            <button onClick={() => {handleClick(goodBye)}}>Say goodbye</button>
        </div>
    )
}

