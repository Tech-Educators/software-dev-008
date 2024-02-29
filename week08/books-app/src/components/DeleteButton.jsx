'use client'
import { handleDelete } from "@/utils/utils";


export default function DeleteButton({id}) {
    return <button onClick={() => handleDelete(id)}>X</button>
}