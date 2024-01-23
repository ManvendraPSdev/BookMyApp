const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174',
}));

app.get("/test", (req, res) => {
    res.json("test alright");
});

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    res.json({ email, password });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
