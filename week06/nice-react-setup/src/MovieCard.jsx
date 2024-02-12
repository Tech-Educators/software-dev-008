
    // console.log(props)
    // components can take 'props'
    // props represents an object passed to the component.
    // props.

    // props are an object?


const MovieCard = (props) => {
    // <> </> are called fragments
    console.log(props)
    return (
        <div className='movie-cards'>
            <h2>{props.movieName}</h2>
            <img src={props.imgLink} alt="" />
            <h3>{props.director}</h3>
            <p>{props.year}</p>
        </div>
    )
}


export default MovieCard;


// function greet(name) {
//     return 'Hello ' + name
// }

// console.log(greet()) // Hello undefined

// greet('Davina')
// object destructuring
// const {name, age} = {
//     name: 'sam',
//     age: 24
// }