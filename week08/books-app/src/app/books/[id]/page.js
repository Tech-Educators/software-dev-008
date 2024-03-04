import { sql } from "@vercel/postgres"
import Image from "next/image"
import { notFound } from "next/navigation";

export default async function Page({params}) {

    // if (isNaN(params.id) ) {
    let book;
    try {
        book = (await sql`SELECT * FROM books WHERE id = ${params.id}`)?.rows?.[0]
    } catch (err) {
        // change to something else. 'you asked for wrong type of thing
        notFound()
    }

    if (!book) {
        notFound()
    }

    const genres = (await sql`
    SELECT g.* FROM genres g
    INNER JOIN book_genres bg ON g.id = bg.genre_id
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


// genres = g
// book_genres =  bg

// select all from geners 
// join some information from book genres - where the genre table ID = book_genre table id
