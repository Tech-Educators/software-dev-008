'use client'
import { useCookie } from "@/context/context";

export default function CookieClicker() {

    const {incrementCookies, cookies} = useCookie()

    return (
        <div>
            <button onClick={incrementCookies}>Moar cookies!</button>
            <p>Cookies: {cookies}</p>
        </div>
    )
}