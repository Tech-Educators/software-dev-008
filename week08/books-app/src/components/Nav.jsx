import Link from "next/link"
import { SignInButton, UserButton, SignedIn, SignedOut, auth} from "@clerk/nextjs";


import AccentButton from "./AccentButton";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";


export default function Nav() {
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
                    {/* TODO: What a mess! */}
                    {
                    <>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton afterSignInUrl="/" afterSignUpUrl="/users/sign-up">
                                <AccentButton content='sign in'/>
                            </SignInButton>
                        </SignedOut>
                    </>
                    }
                </li>
            </ol>
        </div>
    )
}