import Link from "next/link"

export default function Page({params}) {

    // props are passed to our page components containing information about their URLs

    // so the whole props object looks like this: 
    /* 
    {
        params: {
            id: 'whatever-the-user-typed-after-/-cats-vs-dogs'
        }
    }
    
    */

    // we destructure the params out of the whole props object. 'id' comes from the name we gave the dynamic route folder = [id]

    return (
        <div>
            <h2>This is my dynamic route page: </h2>
            <p>I made it by using []&apos;s in my folder name</p>
            <p>This is what I put after /cats-vs-dogs/{params.id}</p>
            <Link href={`/cats-vs-dogs/${params.id}/names-of-warrior-cats`}>Link to something</Link>
        </div>
    )
}


