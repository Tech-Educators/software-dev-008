//dotenv set up
import dotenv from "dotenv";
dotenv.config();

//pg set up
import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//create table for my portraits
db.query(`CREATE TABLE IF NOT EXISTS portraits (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    url TEXT
)`);

//insert portraits data
db.query(`INSERT INTO portraits (title, author, url)
VALUES
('Portret van een vrouw, mogelijk Maria Trip', 'Rembrandt van Rijn', 'https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0'),
    ('Isaak en Rebekka, bekend als Het Joodse bruidje', 'Rembrandt van Rijn', 'https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0'),
    ('Zelfportret als de apostel Paulus', 'Rembrandt van Rijn', 'https://lh3.googleusercontent.com/NrCcfeY0r2F3M2hIQe5SLDRofR2tVzeOH18VjflOYGj88v4clb4v2H_VgCZR4nJhYsxxH9ATzfkL2tRqOWEK5-gPVEE=s0')`);
