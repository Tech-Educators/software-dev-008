import { sql } from "@vercel/postgres"
import { auth } from "@clerk/nextjs"

export default async function Page({params}) {
    // const { userId } = auth() 
    // fettch * from users where clerk_id = ${userId}
    let userDetails = (await sql`SELECT * FROM users WHERE username = ${params.username}`).rows[0]
    return (
        <div>
            <p>Welcome {userDetails.username}</p>
            <p>{userDetails.bio}</p>
        </div>
    )
}