'use client'

import { useState } from "react"
export default function Page({params}) {
    let [a, b]= ['one' , 'two']
    destructuring an array.
    const [count, setCount] = useState(0)
    const [form, setForm] = useState({})

    function handleCollectData(e) {
        console.log(e.target['name'], e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    console.log(form)

    async function handleSubmit(e) {
        e.preventDeafult()
        await fetch('someurl', {
            body: JSON.stringify(form)
        })
    }

    async function handleSearch(e) {
        e.preventDeafult()
        const info = new FormData(e.target)
        const {id} = Object.fromEntries(info)
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await posts.json()
        // update state varible/conditional rendering.
    }
    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input name='name' placeholder="name" onChange={handleCollectData}/>
                <input name='email' placeholder="name" onChange={handleCollectData}/>
            </form> */}

            <form onSubmit={handleSearch}>
                <input name='id' placeholder="id"/>
                <button type='submit'>submit</button>
            </form>


            {/* <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click me!</button> */}
        </div>
    )
}

// when the user types into a field - onChange 
// onSubmit