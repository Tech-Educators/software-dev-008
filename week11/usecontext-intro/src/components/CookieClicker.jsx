'use client'
import { useCookie } from "@/context/context";
import { useReducer } from "react";


export default function CookieClicker() {

    const {state, dispatch} = useCookie()
    

    return (
        <div>
            <button onClick={() => dispatch({type: '+5'})}>Moar cookies!</button>
            <p>Cookies: {state}</p>
            <button onClick={() => dispatch({type: '-5'})}>LESS cookies!</button>
        </div>
    )
}