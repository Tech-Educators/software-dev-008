'use client'
import { handleDelete } from "@/utils/utils";


export default function DeleteButton({id}) {
    return <button onClick={() => handleDelete(id)}>Delete Book/Admin</button>
}