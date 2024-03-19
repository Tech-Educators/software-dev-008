'use client'
import { createContext, useContext, useState, useReducer } from "react"

const CookieContext = createContext(0)

function CookieReducer(state, action) {
    switch (action.type) {
        case "+5":
            return state + 5
        case "-5":
            return state - 5
        default:
            throw new Error('what are you doing? Action not recognised')
    }
       
}

export default function CookieProvider({children}) {
    const [state, dispatch] = useReducer(CookieReducer, 0)
    return (
        <CookieContext.Provider value={{state, dispatch}}>
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



    // const [cookies, setCookies] = useState(0)

    // function incrementCookies() {
    //     setCookies(cookies + 1)
    // }

    // function decrementCookies() {
    //     setCookies(cookies - 1)
    // }
