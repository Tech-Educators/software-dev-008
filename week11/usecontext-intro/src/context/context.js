'use client'

import { createContext, useContext, useState } from "react"

const CookieContext = createContext(0)

export default function CookieProvider({children}) {
    const [cookies, setCookies] = useState(0)

    function incrementCookies() {
        setCookies(cookies + 1)
    }

    return (
        <CookieContext.Provider value={{cookies, incrementCookies}}>
            {children}
        </CookieContext.Provider>
    )
}

// 1. create a context. 
// 2. create a context provider. - always nameofContext.provider
// 3. give our provider the values it needs to provide. 
// 4. create a function that uses that context - that we can import into the components that need it. 

export function useCookie() {
    // give values
    // tell it what context we're trying to retrive
    return useContext(CookieContext)
}