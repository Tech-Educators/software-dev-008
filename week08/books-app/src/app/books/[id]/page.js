import { sql } from "@vercel/postgres"
import Image from "next/image"

export default async function Page({params}) {

    const book = (await sql`SELECT * FROM books WHERE id = ${params.id}`).rows[0]
    const genres = (await sql`
        SELECT g.* FROM genres g
        JOIN book_genres bg ON g.id = bg.genre_id
        WHERE bg.book_id = ${params.id}`)
        .rows;

    let genresDisplay = genres.length > 0 
        ? genres.map(genre => genre.name).join(', ') 
        : "No genres";


    return (
        <div className="flex flex-col text-center items-center">
            <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>Genres: {genresDisplay}</p>
            </div>
            {book.img_url && <Image src={book.img_url} width={300} height={500}/>}
            <br/>
            <p>{book.description}</p>
            <br></br>
            <p>{book.quote}</p>
        </div>
    )
}

// find out what page Im on
// write a sql query to get data about the page im osn 
