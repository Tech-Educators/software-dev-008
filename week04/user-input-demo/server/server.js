import express from "express"
import cors from "cors"

// setup
const app = express()

// middleware
app.use(cors())
app.use(express.json())


app.post('/messages', (request, response) => {
    // request.body is were the information sent from the client to the server is. 
    // have some code here to save to a database. 
    response.status(200).json({message: 'recived', youSent: request.body})
})


// app.get('/messages/:id', (req, res))


// listen to make server able to run.

app.listen('6060', () => {
    console.log(`Server started on port 6060`)
})