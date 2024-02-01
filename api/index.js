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

// app.post("/signin",  async (req, res) => {
//     const { email, password } = req.body;
//     // This Func. will return the newly created user 
//     const userDoc = await User.create({
//         email ,
//          // Now when we pass the password we dont want to apeare that pascode in the cleare text form in the database so we encrypt it  for that we install bcryptjs
//         password:bcrypt.hashSync(password , bcryptSalt) ,
//     })
//     res.json(userDoc);
// });

// app.listen(4000, () => {
//     console.log("Server is running on port 4000");
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const User = require('./models/User.js');
const bcrypt = require("bcryptjs");
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174',
}));

app.use(express.json());

app.get("/test", (req, res) => {
    res.json("test alright");
});

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password before saving it
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

        // Create a new user with the hashed password
        const newUser = await User.create({
            email,
            password: hashedPassword,
        });

        res.json(newUser);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password before saving it
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

        // Create a new user with the hashed password
        const newUser = await User.create({
            email,
            password: hashedPassword,
        });

        res.json(newUser);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
