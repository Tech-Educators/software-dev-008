import DeleteButton from "@/components/DeleteButton";
import { sql } from "@vercel/postgres"
import Link from "next/link";

export default async function Page() {

    const books = (await sql`SELECT * FROM books`).rows;
    // console.log(books)
    return (
        <div>
            <h1>Books:</h1>
            <div className="flex flex-row flex-wrap">
            {books.map(book => (
                <div key={book.id} className="m-8">
                    <DeleteButton id={book.id}/>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <Link href={`/books/${book.id}`} className='text-emerald-500'>Find Out More</Link>
                </div>
            ))}
            </div>
        </div>
    )
}