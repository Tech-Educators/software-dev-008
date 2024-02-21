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
        founded_year INT,
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
    ('Otter-Fansxx, 2001, 'England');
    `)
    res.json({message: 'seeded', result})
})

app.listen(PORT, () => {console.log(`(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ Server running on port, ${PORT}`)})