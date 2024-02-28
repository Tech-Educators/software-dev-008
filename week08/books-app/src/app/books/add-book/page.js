import {sql} from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import SubmitButton from "@/components/SubmitButton"

export default function Page() {

    // becuase this function is used in the form action attribute, it's 'contents' are passed automatically (the formData)
    async function handleAddBook(formData) {
        "use server"
        const title = formData.get('title')
        const author = formData.get('author')
        const description = formData.get('description')
        const quote = formData.get('quote')

        await sql`INSERT INTO books (title, author, description, quote) VALUES (${title}, ${author}, ${description}, ${quote})`


        // tell next to go revalidate that /books now has the correct content
        revalidatePath('/books')

        // redirect them to /books after submitting. 
        redirect('/books')
    }   
    return (
        <div className="bg-zinc-700 flex flex-col items-center">
            <h2 className="text-xl">Add Book to DB</h2>
            <form action={handleAddBook} className="w-6/12 flex flex-col justify-center text-black">
                <label className='text-amber-400 text-lg'>
                    Name
                </label>
                <input name='title'placeholder="Title"/>
                <label className='text-amber-400 text-lg'>
                    Name
                </label>
                <input name='author'placeholder="Author"/>
                <label className='text-amber-400 text-lg'>
                    Name
                </label>
                <input name='description' placeholder="Description"/>
                <label className='text-amber-400 text-lg'>
                    Quote
                </label>
                <input name='quote' placeholder="Quote"/>
                <SubmitButton/>
            </form>
        </div>
    )
}

// {
//     title: 'Ready Player One',
//     author: 'Ernest Cline',
//     description: 'something',
//     quote: "No one in the world gets what they want and that is beautiful."
// }

