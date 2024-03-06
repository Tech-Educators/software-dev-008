'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchPopular } from '@/utils/utils'

import ScrollButton from './ScrollButton'

export default function PopularBooks() {
    const [books, setBooks] = useState([]) 
    const [scroll , setScroll] = useState(0)



    useEffect(() => {
        // set 1 to default pagnation
        // should be 9 books by default 
        const loadBooks = async () => {
            try {
                const fetchedBooks = await fetchPopular(scroll);
                setBooks(fetchedBooks);
            } catch (error) {
                console.error('Failed to fetch books:', error);
                setBooks([]);
            }
        };
        loadBooks();
    }, [scroll])

    console.log(scroll)
    return (
        <div>
            <ScrollButton action={setScroll} scroll={scroll}>
            {books ? books.map(book => (
                <Link href={`/books/${book.id}`} key={book.id}>
                    {/* <Image heigh={400} width={200} src={book.img_url}/> */}
                    <p>{book.name}</p>
                </Link>
            )): ''}
            </ScrollButton>
        </div>
    )
}