import Database from "better-sqlite3";

// idea behind seed file is to 'seed' our database with some intial data. 

// hook up our database.db to get methods. 
const db = new Database('database.db')

// .exec executes some sql query
// you HAVE to use backticks. 
// inside the ()'s we put the columns that we want. 
db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie TEXT,
    year INTEGER
) `)

// PRIMARY KEY - flaging our id as a records unique identifer
// AUTOINCREMENT - start at 1, and one to each new record after that. 


db.exec(`
    INSERT into movies (movie, year)
    VALUES
    ('Black Narcissus, 1947),
    ('Ran', 1985),
    ('Day of Wrath', 1943)
`)