import { sql } from "@vercel/postgres"
import Link from "next/link";

export default async function Page() {

    const books = (await sql`SELECT * FROM books`).rows;
    // console.log(books.rows)
    return (
        <div>
            <h1>Books:</h1>
            {books.map(book => (
                <div key={book.id} className="m-8">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <Link href={`/books/${book.id}`} className='text-emerald-500'>Find Out More</Link>
                </div>
            ))}
        </div>
    )
}