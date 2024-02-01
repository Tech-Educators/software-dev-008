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
    year INTEGER,
    imgURL TEXT
) `)

// PRIMARY KEY - flaging our id as a records unique identifer
// AUTOINCREMENT - start at 1, and one to each new record after that. 


db.exec(`
    INSERT into movies (movie, year, imgURL)
    VALUES
    ('Black Narcissus', 1947, 'https://xl.movieposterdb.com/13_09/1947/39192/xl_39192_b13dc554.jpg'),
    ('Ran', 1985, 'https://xl.movieposterdb.com/08_01/1985/89881/xl_89881_57e5914e.jpg'),
    ('Day of Wrath', 1943, 'https://xl.movieposterdb.com/11_09/1943/36506/xl_36506_5258c5d7.jpg')
`)