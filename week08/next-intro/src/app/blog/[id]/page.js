import Link from "next/link";

export default async function Page({params}) {
    // console.log(params)
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postInfo = await result.json()


    return (
        <div>
            <p> UserId: {postInfo.userId}</p>
            <br/>
            <p>Title: {postInfo.title}</p>
            <br/>
            <p> Body: {postInfo.body}</p>
            <Link href='/blog'>Go back to the blog</Link>
        </div>
    )
}

params: { id: '5' }
