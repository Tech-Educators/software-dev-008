'use client'
import FancyFont from "./FancyFont";
import { useCookie } from "@/context/context";
export default function Header() {

    const {incrementCookies, cookies} = useCookie()

    return (
        <div>
            <h2>Cookie Game</h2>
            <FancyFont>
                {cookies}
            </FancyFont>
        </div>
    )
}

// lifting state 
// prop drilling - passing props through multiple components. 

