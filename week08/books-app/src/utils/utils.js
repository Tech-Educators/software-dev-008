'use server'
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"


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

export async function fetchPopular(paginationNumber) {
    // await sql`SELECT * FROM books ORDER BY views `
    const data = [
        {   
            id: 1,
            name: 'name1',

        },
        {   
            id: 2,
            name: 'name2',

        },
        {   
            id: 3,
            name: 'name3',

        },
        {   
            id: 4,
            name: 'name4',

        },
        {   
            id: 5,
            name: 'name5',

        },
        {   
            id: 6,
            name: 'name6',

        },
        {   
            id: 7,
            name: 'name7',

        },
        {   
            id: 8,
            name: 'name8',

        },
        {   
            id: 9,
            name: 'name9',

        }
    ]

    try {
        if (paginationNumber === 0) {
            return data.slice(0, 3);
        } else if (paginationNumber === 1) {
            return data.slice(3, 6);
        } else {
            return data.slice(6);
        }
    } catch (error) {
        console.error("Error fetching popular books:", error);
        // TODO: do something else
        return []; // return an empty array as oopse
    }
        
}

export async function isSignedUp(user) {
    try {
        let userExists = (await sql`SELECT * FROM users WHERE clerk_id = ${user}`).rows
        return userExists.length != 0
    } catch (e) {
        throw new Error('Error:' + e)
    }
}