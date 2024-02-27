import Link from "next/link"

// this meta data is just for the /posts route.
// has to be called lowercase 'metadata' - has to be exported. 
export const metadata = {
     title: 'This is the posts route',
     description: 'These are many posts',
     openGraph : {
        title: 'The posts route on Sams blog',
        type: 'website',
        // url: 'localhost:3000',
        // // images will be an array. Normally you want to add this image to the public folder. 
        // images: []
     }
}

export default async function Page() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await result.json()

    return (
        <div>
            <h2>Latest blog posts..</h2>
            {posts.map(post => (
                <div key={post.id} className='m-8'>
                    <h3>{post.title}</h3>
                    <Link href={`/posts/${post.id}`} className='text-yellow-300'>Read more...</Link>
                </div>
            ))}
        </div>
    )
}