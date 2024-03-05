import DeleteButton from "@/components/DeleteButton";
import { sql } from "@vercel/postgres"
import Link from "next/link";
import Image from "next/image";


export default async function Page() {
    

    const books = (await sql`SELECT * FROM books`).rows;
    // console.log(books)
    return (
        <div className="max-w-screen-lg flex flex-col items-center m-auto">
            <h1>Popular books:</h1>
            <div className="flex flex-row flex-wrap min-w-1.5">
            {books.map(book => (
                <div key={book.id} className="m-4 w-40">
                    <h3>{book.title}</h3>
                    {book.img_url && <Image src={book.img_url} width={150} height={250}/>}
                    {/* <p>{book.author}</p> */}
                    <Link href={`/books/${book.id}`} className='text-emerald-500'>Find Out More</Link>
                </div>
            ))}
            </div>
        </div>
    )
}