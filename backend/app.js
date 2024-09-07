import dotenv from 'dotenv';
dotenv.config();
import web from './routes/web.js';
import cors from 'cors';
import express from 'express';
const app = express(); 

const port = process.env.PORT || '3000';
app.use(cors());

app.use(express.json());

app.use("/fedex" , web)


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })