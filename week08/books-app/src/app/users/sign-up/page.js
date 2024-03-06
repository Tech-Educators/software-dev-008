import SubmitButton from "@/components/SubmitButton"
import { auth } from "@clerk/nextjs"
import { sql } from "@vercel/postgres"

export default function Page() {
    const { userId } = auth()

    async function handleCreateUser(formData) {
        'use server'
        console.log('something happening')
        const {username, bio} = Object.fromEntries(formData)
        // console.log(userId)
        try {
            await sql`
                    INSERT INTO users 
                    (clerk_id, username, bio)
                    VALUES 
                    (${userId},  ${username}, ${bio}
                    );`
        } catch (e) {
            throw new Error('error creating your profile.' + e)
        }
    }
    return (
        <div>
            <form action={handleCreateUser} className="text-black">
                <input name='username' placeholder="username"/>
                <input name='bio' placeholder="a small bio.."/>
                <SubmitButton thing='profile' />
            </form>
        </div>
    )
}