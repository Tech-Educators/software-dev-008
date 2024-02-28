'use client'
import {useFormStatus} from 'react-dom'

export default function SubmitButton() {

    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type='submit' className="bg-amber-400 m-8 rounded-md">
            {pending ? 'Adding book...' : 'Add book'}
        </button>
    )
}