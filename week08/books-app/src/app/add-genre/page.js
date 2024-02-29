import SubmitButton from "@/components/SubmitButton"
import {sql} from "@vercel/postgres"
import { revalidatePath } from "next/cache";

export default async function Page() {
    const genres = (await sql`SELECT * from genres`).rows
    console.log(genres)

    async function handleAddGenre(formData) {
        'use server'
        const name = formData.get('name')
        const descripton = formData.get('description')
        
        await sql`INSERT INTO genres (name, description) VALUES (${name}, ${descripton})`

        revalidatePath('/add-genre')
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <form action={handleAddGenre} className="flex flex-col w-3/6 p-5">
                <input type="text" name="name" placeholder="genre name" required/>
                <input type="text" name="description" placeholder="genre description"/>
                <SubmitButton thing='genre' />
            </form>
            {genres.map(genre => (
                <div>
                    <h3>{genre.name}</h3>
                    <p>{genre.description}</p>
                </div>
            ))}
        </div>
    )
}