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
        // the user will send over information in the req.body: 
        /* 
            {
                "name" : "bubbles",
                "age" : "2",
                "species": "Smooth-Coated Otter"
                "conservation_agency_id": 3
            }
        */

        let name = req.body.name
        let age = req.body.age
        let species = req.body.species
        let conservation_agency_id = req.body.conservation_agency_id
        // when someone makes a post request
        // they have to send certain details with. 
        await db.query(`
        INSERT INTO otters (name, age, species, conservation_agency_id)
        VALUES
        ($1, $2, $3, $4)
        `,
        [name, age, species, conservation_agency_id]
        )
        res.status(200).json({message: 'Otter created!'})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

app.get('/conservation', async (req, res) => {
    try {
        let result = await db.query(`SELECT * FROM conservation_agencies`)
        // this works fine - the data we want it on rows!
        res.status(200).json(result.rows)
    } catch (err) {
    }
})

app.post('/conservation', async (req, res) => {
    console.log(req.body)
    try {
        let name = req.body.name
        let founded_year = req.body.founded_year
        let country = req.body.coutry

        let result = await db.query(`
        INSERT INTO conservation_agencies (name, founded_year, country)
        VALUES
        ($1, $2, $3)
        `,
        [name, founded_year, country]
        )
        res.status(200).json({message: 'Conservation agency created!'})
    } catch (err) {
        res.status({error : err})
    }
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


// res.status()
// res.json()