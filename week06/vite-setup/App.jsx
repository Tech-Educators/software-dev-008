import React from "react"
import MovieCard from "./MovieCard"

// HAVE to be named uppercase

function sum(a,b) {
    return a + b
}

// Have to only return one parent TAG
export default function App() {
    return (
        <div>
            <h1>Hello, react!</h1>
            <MovieCard/>
        </div>
    )
}