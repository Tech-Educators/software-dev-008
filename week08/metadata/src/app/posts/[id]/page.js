export async function generateMetadata({params}) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await result.json()

    return {
        title: `Sams Blog: ${post.title}`,
        description: `This is an article about ${post.title}`
    }
}

// if doing a dynamic route, you need to export a function called generateMetadata() that returns the metadata information. 

export default async function Page({params}) {

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await result.json()

    return (
        <div>
            <p>{post.id}</p>
            <h2 className='underline decoration-sky-500'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

// how do I find out what page the user is on? What is the value of id?
// how do I dispaly the correct information. 
// fetch specific params.id from json placeholder