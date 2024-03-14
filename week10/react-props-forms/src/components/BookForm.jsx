'use client'

import { useState } from "react"

// if we're trying to update a book, we'll pass that books details 
// handleUpdate is going to be a placeholder/the function we want to run on the form when the user submits. 
export default function BookForm({book, handleFormSubmit}) {

    const [bookDetails, setBookDetails] = useState(book ?? {
        title: '',
        author: '',
        description: '',
        quote: '',
        img_url: ''
    })

    const handleChange = (event) => {
        setBookDetails({...bookDetails, [event.target.name] : event.target.value})
      }  

      function submit(e) {
        e.preventDefault()
        handleFormSubmit(bookDetails)
      }

    return (
            <form className="w-full max-w-lg flex flex-col justify-center text-black" onSubmit={submit}>
            {/* {bookDetails ? <input type="hidden" name="id" value={bookDetails.id} /> : null} */}
    
            <label className='text-amber-400 text-lg'>Title</label>
            <input name='title' defaultValue={bookDetails.title} required onChange={handleChange}/>
    
            <label className='text-amber-400 text-lg'>Author</label>
            <input name='author' defaultValue={bookDetails.author} required onChange={handleChange}/>
    
    
            <label className='text-amber-400 text-lg'>Description</label>
            <input name='description' defaultValue={bookDetails.description} onChange={handleChange}/>
    
            <label className='text-amber-400 text-lg'>Quote</label>
            <input name='quote' defaultValue={bookDetails.quote} onChange={handleChange}/>
    
            <label className='text-amber-400 text-lg'>Image Link</label>
            <input name='img_url' defaultValue={bookDetails.img_url} onChange={handleChange}/>
    
            <button type='submit'>submit</button>
            </form>
        )
}