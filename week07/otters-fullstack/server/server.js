import { connect } from './utils/connect.js'
import { queryGenerator } from './utils/query.js'

import express from "express"
import cors from "cors"

const app = express()
const PORT = 4242

// middleware
app.use(cors())
app.use(express.json())
const db = connect()

app.get('/otters', async (req, res, next) => {
   try {
        let query = `SELECT * FROM otters`
        let values;

        // to deal with query params. 
        if (Object.entries(req.query).length != 0) {
            // returns an array = [queryString, values to insert]
            const [queryWhere, valuesWhere] = queryGenerator(req.query, ['otter_id', 'species', 'conservation_agency_id'])
            query += queryWhere
            values = [...valuesWhere]
        }
        const result = (await db.query(query, values)).rows
        res.status(200).json(result)
   } catch (err) {
        res.status(400).json({error: err.message})
   }
})

app.delete('/otters', async (req, res) => {
    try {
        let query = 'DELETE FROM otters'
        const [queryWhere, valuesWhere] = queryGenerator(req.query, ['otter_id'])
        query += queryWhere
        await db.query(query, valuesWhere)
        res.status(200).json({message: 'Otter id deleted'})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

app.post('/otters', async (req, res) => {
    try {
        let query = `INTERT INTO otters `
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

app.get('/conservation', async (req, res) => {
    try {
        let result = await db.query(`SELECT * FROM conservation_agencies`)
        // this works fine - the data we want it on rows!
        console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (err) {
    }
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


// res.status()
// res.json()