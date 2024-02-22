// set up express
import express from "express";
const app = express();
app.use(express.json());

//set up cors
import cors from "cors";
app.use(cors());

//dotenv set up
import dotenv from "dotenv";
dotenv.config();

//pg set up
import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// set up my port
const PORT = "8080";
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

//set up our root route
app.get("/", (request, response) => {
  response.send("Root route: where the fun is");
});

//read portraits
app.get("/portraits", async (request, response) => {
  const result = await db.query("SELECT * FROM portraits");
  response.json(result.rows);
});

//add portraits
app.post();

//update portraits
app.put();

//delete portraits
app.delete();
