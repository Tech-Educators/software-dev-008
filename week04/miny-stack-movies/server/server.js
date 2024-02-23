import express from "express"
import cors from "cors"
const PORT = '4242'
import Database from "better-sqlite3"
const db = new Database('database.db')
const app = express(); app.use(express.json()) ; app.use(cors()) 

// ROOT ROUTE PLS
app.get('/', (req, res) => {res.send('OoooOOhhh! 👻')})

app.get('/movies', (req, res) => {
    try {
        if (req.query.id) {
            let movie = db.prepare(`SELECT * FROM movies WHERE id = ?`).all(req.query.id)
            res.status(200).json(movie)
            return 
        }
        let movies = db.prepare(`SELECT * FROM movies`).all()
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json(err)
    }
})

// POST route  

app.post('/movies', (req, res) => {
    try {   
        const movie = req.body.movie
        const year = req.body.year
        const imgUrl = req.body.imgURL
        const newMovie = db.prepare(`INSERT INTO movies (movie, year, imgURL) VALUES (?, ?, ?) `).run(movie, year, imgUrl)
        res.status(200).json(newMovie)
    } catch (err) {
        res.status(500).json({error : err})
    }
})

// DELETE
app.delete('/movies/:id', (req, res) => {
    try {
        const id = req.params.id
        const deletedMovie = db.prepare(`DELETE FROM movies WHERE id = ? `).run(id)
        res.status(200).json({recordDeleted: deletedMovie})
    } catch (err) {
        res.status(500).json({error: err})
    }
})

// UPDATE
app.put('/movies/:id', (req, res) => {
    console.log(req.params, req.body)
    try {
        const id = req.params.id
        const movie = req.body.movie
        const year = req.body.year
        const imgUrl = req.body.imgURL

        const updateMovies = db.prepare(`UPDATE movies SET movie = ?, year = ? , imgURL = ? WHERE id = ?`).run(movie, year, imgUrl, id)
        res.status(204).json({messaged : updateMovies})
    } catch (err) {
        res.status(500).json({error: err})
    }
})


// it do be listening
app.listen(PORT, () => {
    console.log(`─=≡Σ((( つ◕ل͜◕)つ Server started on PORT: ${PORT} `)
})