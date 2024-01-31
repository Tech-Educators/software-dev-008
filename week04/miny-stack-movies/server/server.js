import express from "express"
import cors from "cors"

const PORT = '2222'
import Database from "better-sqlite3"


const db = new Database('database.db')


const app = express()
app.use(express.json())
app.use(cors())

// ROOT ROUTE PLS
app.get('/', (req, res) => {

    // haunted server. send a string back
    res.send('OoooOOhhh! 👻')

    // send json back
    // res.json({spooked: true})

    // send a status code back. 

    // 200 OK
    // res.status(200)

    // 500 - Internal Server Error
})  


// get -> Select statment
// post -> Insert

// http://localhost:2222/movies?id=1

//http://localhost:2222/movies?year=2000
app.get('/movies', (req, res) => {
    try {
        
        // find a record by it's id. 

        if (req.query.id) {
            let movie = db.prepare(`SELECT * FROM movies WHERE id = ?`).all(req.query.id)


            // VERY BAD DON"T DO THIS!!!
            // let movie = db.prepare(`SELECT * FROM movies WHERE id = ${req.query.id}`).all()
            res.status(200).json(movie)
            // return early so it doesn't run the code below. 
            return 
        }

        // add some new movies to your db using your seed js - some movies of the same year. 
        // try to fetch all movies from a certain year. 

        let movies = db.prepare(`SELECT * FROM movies`).all()

        // .prepare() - optimize statement for use, but it's not running yet. 
        // .all() run the statment, and return all the results of that statment. 
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.get('/querytest', (req, res) => {
    console.log(req.query)
    if (req.query.one && req.query.two) {
        res.send('You sent two queries')
    } else if (req.query.two) {
        res.send('You send query two')
    } else if (req.query.one) {
        res.send('You sent query one')
    } else {
        res.send(`You either didn't send a query, or you didn't send a valid one.`)
    }
})

// POST route to create new movie entries in our Database. 

app.post('/movies', (req, res) => {
    try {   
        const movie = req.body.movie
        const year = req.body.year

        // run my sql statement - ??'s are replaced by the values in .run() (movie, year)
        const newMovie = db.prepare(`INSERT INTO movies (movie, year) VALUES (?,?) `).run(movie, year)
        res.status(200).json(newMovie)
    } catch (err) {
        res.status(500).json({error : err})
    }
})

// it do be listening
app.listen(PORT, () => {
    console.log(`─=≡Σ((( つ◕ل͜◕)つ Server started on PORT: ${PORT} `)
})