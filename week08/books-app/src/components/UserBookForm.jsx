import { sql } from "@vercel/postgres"

// get user data with the book to see if they've interacted with it.

// if they rate the book, query books table to add to average rating?

// add review section for forms.

// ??? profit
export default function UserBookForm() {
    async function handleUserBookLog() {
        'use server'
        await sql``
    }

    return (
        <div>
            <button>Log book</button>
        </div>
    )
}