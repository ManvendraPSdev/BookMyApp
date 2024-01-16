const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose")
require('dotenv').config()
const app = express();


app.use(express.json()) ; // Why use 

app.use(cors({
    credentials: true,
    origin: "http://localhost:5175"
}));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL); 

app.get('/test', (req, res) => {
    res.json("Test ok");
});

app.post('/login', (req, res) => {
    const{email , password} = req.body
    res.json({email , password});
});

app.listen(4000);
