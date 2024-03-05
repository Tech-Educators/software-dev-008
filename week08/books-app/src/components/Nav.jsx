import Link from "next/link"
import { SignInButton, UserButton, SignedIn, SignedOut} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

import AccentButton from "./AccentButton";

export default function Nav() {
    const {userInfo} = auth()

    return (
        <div>
            <ol className={`flex justify-between flex-row p-3`}>
                <div className="flex">
                    <li className="m-4"><Link href='/'>home</Link></li>
                    <li className="m-4"><Link href='/books'>books</Link></li>
                    <li className="m-4"><Link href='/books/add-book'> add books</Link></li>
                    <li className="m-4"><Link href='/add-genre'> add/view genres</Link></li>
                </div>
                <li className="m-4 self-end">
                    {
                        <>
                    <SignedIn><UserButton/></SignedIn>
                    <SignedOut><SignInButton><AccentButton content='sign in'/></SignInButton></SignedOut>
                    </>

                    }
                </li>
            </ol>
        </div>
    )
}