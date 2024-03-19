'use client'
import {useState, useEffect} from 'react'

export default function Page() {
    const [posts, setPosts] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        getPosts()
        sendData()
    }, [])

    async function getPosts() {
        const res = await fetch(`/api/posts`)
        const postsRes = await res.json()
        setPosts(postsRes)
    }

    async function sendData() {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: {data: 'some data'}
        })
    }

    return (
        <div>
            <h2>My posts</h2>
            {posts.map((post) => (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}