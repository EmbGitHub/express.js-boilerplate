import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;
// App config
const app = express();

// Middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})


// Server
app.listen(port, () => {
    console.log('Server is running on port 5000')
})