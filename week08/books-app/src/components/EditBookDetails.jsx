import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";


export default async function EditBookDetails({ book, genres }) {
    // TODO: sort out the 'current' genres stuff
    const allGenres = (await sql`SELECT * FROM genres`).rows

    async function handleEditBook(formData) {
        'use server'
        const formDetials = Object.fromEntries(formData)
        const {id, title, author, description, quote, img_url, genres} = formDetials

        await sql`UPDATE books SET title=${title}, author=${author}, description=${description}, quote=${quote}, img_url=${img_url} WHERE id=${id}`;

        await sql`DELETE FROM book_genres WHERE book_id=${id}`;
        
        if (genres) {
            for (const genreId of genres) {
                await sql`INSERT INTO book_genres (book_id, genre_id) VALUES (${id}, ${genreId})`;
            }
        }

        revalidatePath(`/books/${book.id}`);
    }

    // TODO: turn this and create book into one form component lol
    return (
        <div className={`bg-zinc-700 flex flex-col items-center p-6`}>
            <h2 className="text-xl text-amber-400">Edit Book Details</h2>
            <form method="post" action={handleEditBook} className="w-full max-w-lg flex flex-col justify-center text-black">
                <input type="hidden" name="id" value={book.id} />

                <label className='text-amber-400 text-lg'>Title</label>
                <input name='title' defaultValue={book.title} required/>

                <label className='text-amber-400 text-lg'>Author</label>
                <input name='author' defaultValue={book.author} required/>


                <label className='text-amber-400 text-lg'>Description</label>
                <input name='description' defaultValue={book.description} />

                <label className='text-amber-400 text-lg'>Quote</label>
                <input name='quote' defaultValue={book.quote} />

                <label className='text-amber-400 text-lg'>Image Link</label>
                <input name='img_url' defaultValue={book.img_url} />


                <label className='text-amber-400 text-lg'>Release Date</label>
                <input name='release' defaultValue={book.release} />


                <label htmlFor="genres" className="text-amber-400 text-lg">Select genres (hold shift to select multiple)</label>

                {/* TODO: sort this out */}
                <select name='genres' id='genres' multiple>
                    {/* {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))} */}
                    {allGenres.map(g => (
                           <option key={g.id} value={g.id}>
                           {g.name}
                            </option>
                    ))}
                </select>

                <button type="submit" className="btn-submit">Update Book</button>
            </form>
        </div>
    );
}
