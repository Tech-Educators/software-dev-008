import express from 'express'
import 'dotenv/config'
import pg from 'pg';


// whnever you see 'new' 
// creat a new instance of an object. 
const db = new pg.Pool({
  connectionString: process.env.POSTGRES_URL,
})


// invoking the express() gives us an object. 

const app = express()

// servers do two things 

// listen for requests
// repond to request.


// when someone makes a get request to '/'
// run this function (the function you pass has access to two things)
// request object
// response. 
app.get('/', function(request, response) {
    response.send('Hello!')
})

// express backends



app.get('/books', async function(req, res){
    // /books?id=5&sunny=true
    console.log(req.query.id)
    // /books
    // /books?id=4

    if (req.query.id) {
        const books = await db.query(`SELECT * FROM books WHERE id = $1`, [req.query.id])
        const final = books.rows[0]
        res.json(final)
        return;
    }
    const books = await db.query(`SELECT * FROM books`)
    const final = books.rows
    res.json(final)
})

app.get('/photo', function(req, res){
    res.json({message: '/photos'})
})

app.delete('/photo', function(req, res) {
    res.json({message: 'Deleted photo'})
})

// // keep listening until I tell it to stop
app.listen('8080', () => console.log('Server is running'))