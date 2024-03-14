import Image from "next/image";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import BookForm from "@/components/BookForm";

export const metadata = {
    title: 'Hello nextjs!',
    description: 'This is my nextjs app about books!'
}

export default async function Home() {


  const books = (await sql`SELECT * FROM books`).rows;

  async function addBook(bookDetails) {
    'use server'
    console.log('Added book' , bookDetails)
  }

  async function updateBook(bookDetails) {
    'use server'
    console.log('updated book' , bookDetails)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* add a new book */}
      <BookForm handleFormSubmit={addBook}/>
     {books.map(book => (
              <div key={book.id}>
              <h3>{book.title}</h3>
              {book.img_url && <Image src={book.img_url} height={100} width={150}/>}
              <BookForm book={book} handleFormSubmit={updateBook} />
              <Link href={`/${book.id}`}>Read more</Link>
              </div>

     ))}
    </main>
  );
}


// app.get('/endpoint', (req, res) => {
//   res.send('boo')
// })


// app.delete('/endpoint/:id', (req, res) => {
//   res.send('boo')
// })