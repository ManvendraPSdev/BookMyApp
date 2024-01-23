// const express = require("express");
// const cors = require("cors");
// const { default: mongoose } = require("mongoose");
// const bcrypt = require("bcryptjs")
// const User= require('./models/User1.js')
// require('dotenv').config()
// const app = express();
// // const mongoose = require("mongoose");

// const bcryptSalt = bcrypt.genSaltSync(10);

// //app.use(express.json());

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173',
// }));

// app.use(express.json());


// app.get("/test", (req, res) => {
//     res.json("test alright");
// });

// console.log(process.env.MONGO_URL);

// mongoose.connect(process.env.MONGO_URL);

// app.post("/signin", async (req, res) => {
//     const { email, password } = req.body;
//     // This Func. will return the newly created user 
//     const userDoc = await User.create({
//         email ,
//         password : bcrypt.hashSync(password , bcryptSalt),// Now when we pass the password we dont want to apeare that pascode in the cleare text form in the database so we encrypt it  for that we install bcryptjs
//     })
//     res.json(userDoc);
// });

// app.listen(4000, () => {
//     console.log("Server is running on port 4000");
// });



const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
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

