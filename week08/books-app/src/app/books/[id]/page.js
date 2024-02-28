import { sql } from "@vercel/postgres"

export default async function Page({params}) {

    const book = (await sql`SELECT * FROM books WHERE id = ${params.id}`).rows[0]

    console.log(book)

    return (
        <div className="flex flex-col text-center">
            <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>
            <br/>
            <p>{book.description}</p>
            <br></br>
            <p>{book.quote}</p>
        </div>
    )
}

// find out what page Im on
// write a sql query to get data about the page im on 
