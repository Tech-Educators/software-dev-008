import express from "express"
import cors from "cors"

const PORT = '4242'
import Database from "better-sqlite3"


const db = new Database('database.db')


const app = express()
app.use(express.json()) // parses incoming json request
app.use(cors()) // tell server to accept requests from domains outside itself

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


            // SELECT * FROM MOVIES WHERE ID = 1 OR 1
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

// req.body -> stuff sent from the client explicitly. 
// req.query -> ?key=value in the url 

// also this one - also in url, but not in the query
// /movies/:id
// req.params -> /movies/2

app.get('/querytest', (req, res) => {

    // localhost:2222/querytest?one=1&two=2 // you sent two queries
    // localhost:2222/querytest?unicorn=1 // you either didn't send a query ...
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

        // req.body =
        // {
        //     movie: "movieTitle",
        //     year: "12354"
        //   }
        const movie = req.body.movie
        const year = req.body.year
        const imgUrl = req.body.imgURL

        // run my sql statement - ??'s are replaced by the values in .run() (movie, year)
        const newMovie = db.prepare(`INSERT INTO movies (movie, year, imgURL) VALUES (?, ?, ?) `).run(movie, year, imgUrl)
        res.status(200).json(newMovie)
    } catch (err) {
        res.status(500).json({error : err})
    }
})

// DELETE ROUTE 
// movies/1 // black narcissus 
// movies/5 // blade runner
// movies/:id
app.delete('/movies/:id', (req, res) => {
    try {
        const id = req.params.id
        const deletedMovie = db.prepare(`DELETE FROM movies WHERE id = ? `).run(id)
        //http response codes 
        res.status(200).json({recordDeleted: deletedMovie})
    } catch (err) {
        res.status(500).json({error: err})
    }
})

app.put('/movies/:id', (req, res) => {
    try {
        const id = req.params.id
        const movie = req.body.movie
        const year = req.body.year
        const imgUrl = req.body.imgURL

        const updateMovies = db.prepare(`UPDATE movies SET movie = ?, year = ? imgURL = ? WHERE id = ?`).run(movie, year, imgUrl, id)
        res.status(204).json({messaged : updateMovies})
    } catch (err) {
        res.status(500).json({error: err})
    }
})


// it do be listening
app.listen(PORT, () => {
    console.log(`─=≡Σ((( つ◕ل͜◕)つ Server started on PORT: ${PORT} `)
})