import express from "express"

// intitialise my app by doing this 
const app = express()

// tell express to parse json.
app.use(express.json())
// app.method('endpoint', callback(request, response))

// my route route!
app.get("/", (request, response) => {
    response.send({message: "You're looking at my root route! How roude!"})
})

// request 

app.post("/messages", (request, response) => {
    console.log(request.body)
    // response.send(request)
    response.json({message: "You sent me this: ", data: request.body})
})

// listen for things happening - requests being made to the server. 

app.listen('8080', () => {
    console.log('The server is running')
})


// write a endpoint that listens for the request.body to have two numbers, then the server adds them together and responds with them. 

app.post('/add', (request, response) => {
    console.log(request.body)
    console.log(request.body.num1);

    let num1 = request.body.num1
    let num2 = request.body.num2

    let sum = num1 + num2
    
    response.status(200).json(sum)
    // how to get information from post requests?
    
})