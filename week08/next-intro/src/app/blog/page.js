
import Link from "next/link"

export default async function Page({searchParams}) {
    // got our data
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let posts = await response.json()

    console.log(searchParams)

    // params
    // /users/[id]

    // search Params (query strings)
    //?name=sam&hair=brown

    // ?userId=3
    // ability to sort by a users id. 

    if (searchParams.user) {
        // go through array one by one, and return that post if the posts'UserID == searchParam user. 
        posts = posts.filter((post) => post.userId == searchParams.user)
    }

    if (searchParams.sort) {
        posts.reverse()
    }

    return (
        <div>
            <h2>This is my blog page!</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <Link href={`/blog/${post.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}