import Link from "next/link"
export default function Nav() {
    return (
        <div>
            <ol className="flex flex-row p-3">
                <li className="m-4"><Link href='/'>home</Link></li>
                <li className="m-4"><Link href='/books'>books</Link></li>
                <li className="m-4"><Link href='/books/add-book'> add books</Link></li>
                <li className="m-4"><Link href='/add-genre'> add/view genres</Link></li>
            </ol>
        </div>
    )
}