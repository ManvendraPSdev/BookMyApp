

const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));


app.get('/test', (req, res) => {
    res.json("Test ok");
});

app.listen(4000);
