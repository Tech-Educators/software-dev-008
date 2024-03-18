'use client'

import { createContext, useContext, useReducer, useState } from "react"

const CookieContext = createContext(0)

// useReducer. 

// let array = [1,2,3]

// array.reduce((current, accumulate) => {})

function CookieReducer(state, action) {
    switch (action.type) {
        case "+5":
            return state + 5
        case "-5":
            return state - 5
        default:
            throw new Error(`I dont know what you're trying to do! dispatch something else.`)
    }

}


export default function CookieProvider({children}) {
    // as an arugment, useReducer takes a reducer function, intial state)
    // so we will write a reducer function to give to it. 
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