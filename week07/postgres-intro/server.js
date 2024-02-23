import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
let PORT = 8080;

import pg from "pg"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTIONSTRING
});

app.get('/make-otter-table', async (req, res) => {
    const result = await db.query(`CREATE TABLE IF NOT EXISTS otters (
        otter_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INT,
        species VARCHAR(255),
        conservation_agency_id INT,
        FOREIGN KEY (conservation_agency_id) REFERENCES conservation_agencies(agency_id)
    );`)
    res.json(result)
})

app.get('/make-conservation-table', async (req, res) => {
    const result = await db.query(`CREATE TABLE conservation_agencies (
        agency_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        founded_year INT,s
        country VARCHAR(255)
    );
    `)
    res.json(result)
})

app.get('/seed-otter', async (req, res) => {
    const result = await db.query(`INSERT INTO otters (name, age, species, conservation_agency_id)
    VALUES 
    ('Otto', 5, 'North American River Otter', 1),
    ('Lili', 2, 'Smooth-Coated Otter', 2),
    ('Hanan', 4, 'Asian Small-Clawed Otter', 1)
    ;`)
    res.json({message: 'seeded', result})
})

app.get('/seed-conservation', async (req, res) => {
    const result = await db.query(`INSERT INTO conservation_agencies (name, founded_year, country)
    VALUES 
    ('Global Otter Conservancy', 1998, 'USA'),
    ('xXOtter-FansXx', 2001, 'England');
    `)
    res.json({message: 'seeded', result})
})

app.get('/otters', async (req, res) => {
    try {
      
        const result = (await db.query(`SELECT * FROM otters`)).rows

        res.json(result)
    } catch (err) {
        res.json({error: err})
    }
})

app.get('/conservation', async (req, res) => {
    const result = (await db.query(`SELECT * FROM conservation_agencies`)).rows
    res.json(result)
})


// if we need to use user input/validate data before inserting!
// the $1's are replaced in order by the values in the array (you also pass that array to .query())
app.get('/special-insert', async (req, res) => {
    const result = await db.query(`INSERT INTO otters (name, age, species, conservation_agency_id) VALUES ($1, $2, $3, $4);`, ['Bug', 2, 'Smooth-Coated Otter', 4])
    res.json(result)
})


app.get('/find-otter-agency', async (req, res) => {
    const result = await db.query(`SELECT                            
    o.name,
    o.age, 
    o.species,
    o.conservation_agency_id, 
    c.agency_id,
    c.name AS agency_name,
    c.founded_year
    FROM otters AS o INNER JOIN conservation_agencies AS c 
    ON o.conservation_agency_id = c.agency_id`)
    let final = result.rows
    res.json(final)
})

app.listen(PORT, () => {console.log(`(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ Server running on port, ${PORT}`)})


/* Ignore this lol */

// class QueryBuilder {
//     constructor() {
//         this.init()
//     }

//     init() {
//         this.query = '';
//         return this
//     }

//     select(table, fields = '*') {
//         this.query = `SELECT ${fields} FROM ${table}`
//         return this
//     }


//     where(condition) {
//         this.query += `WHERE ${condition}`
//         return this
//     }

//     join() {
//         this.query += `JOIN `
//     }

//     as(alias) {
//         this.query += `AS ${alias}`
//         return this
//     }

//     insert(table, values) {
//         //HMM
//         this.query += `INSERT INTO ${table} VALUES ()`
//     }
// }

// const query = new QueryBuilder()

// const selectAll = query.select('otters')
// console.log(selectAll)