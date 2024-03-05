import { sql } from "@vercel/postgres"

export default function CreateProfile() {
    async function handleCreateProfile() {
        'use server'
        const user = await currentUser();

        //TODO : do something else here
        if (!user) {
            throw new Error('You must be signed in to use this feature');
        }

        await sql`INSERT INTO `
    }
    return (
        <form action={handleCreateProfile}>
            <input name='user_name'></input>
            <input name='bio'></input>
        </form>
    )
}