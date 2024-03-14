import express from 'express'

const app = express()

app.get('/endpoint', (req, res) => {
    if (req.query.name) {
        res.send(`You sent: ${req.query.name}`)
    }
    res.send('hello')
})

app.listen('5252', () => console.log('server running on 5252'))