'use server'
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function handleDelete(id) {
    await sql`DELETE FROM books WHERE id=${id}`
    revalidatePath('/books')
}

export async function handleUpdate(values, id) {
    // values should be a string like `column1 = value` ect. 
    await sql`UPDATE books SET ${values} WHERE id=${id}`
    revalidatePath(`/books/${id}`)
}

function gereateUpdateString(formData) {

}


export async function getGenres() {
    const genres = (await sql`SELECT * from genres`).rows
    return genres
}