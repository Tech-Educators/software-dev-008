import Link from "next/link"

export default function Page({params}) {

    return (
        <div>
            <h2>This is my dynamic route page: </h2>
            <p>I made it by using []&apos;s in my folder name</p>
            <p>This is what I put after /cats-vs-dogs/{params.id}</p>
            <Link href={`/cats-vs-dogs/${params.id}/names-of-warrior-cats`}>Link to something</Link>
        </div>
    )
}


