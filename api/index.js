// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const User = require('./models/UserModified');
// require('dotenv').config();
// const app = express();

// const bcryptSalt = bcrypt.genSaltSync(10) ;

// app.use(express.json());

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173',
// }));

// console.log(process.env.MONGO_URL);
// mongoose.connect(process.env.MONGO_URL) ;

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('MongoDB connected successfully');
//   // Start your Express server here
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
// });

// app.get("/test", (req, res) => {
//     res.json("test alright");
// });

// app.post("/signin", async (req, res) => {
//     const { name, email, password } = req.body;
//     try{
//         const userDoc = await User.create({
//             UserName: name,
//             email,
//             password : bcrypt.hashSync(password , bcryptSalt) 
//         });
//         res.json(userDoc);
//     }
//     catch(e){
//         res.status(422).json(e) ;
//     }
    
// });

// // Bs Mongo DB me problem

// app.post("/login", async (req, res) => {
//     const { name, email, password } = req.body;
//     const userDoc = await User.findOne({email , name});
//     if(userDoc){
//         const passok = bcrypt.compareSync(password , userDoc.password) ;
//         if(passok){
//             res.json("Found") ;
//         }
//         else{
//             res.status(422).json("Pass not ok") ;
//         }
//     }
//     else{
//         res.json("Not Found") ;
//     }
// });


// // ... (other routes or middleware)

// // Example route
// app.get("/", (req, res) => {
//   res.send("Hello, this is your Express server!");
// });

// // Make sure to add any other routes or middleware here

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });




const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require('./models/UserModified');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('MongoDB connected successfully');
    // Start your Express server here
});

// Define your routes here
app.get("/test", (req, res) => {
    res.json("test alright");
});

app.post("/signin", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            UserName: name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }

});

// Bs Mongo DB me problem

app.post("/login", async (req, res) => {
    const { name, email, password } = req.body;
    const userDoc = await User.findOne({ email, name });
    if (userDoc) {
        const passok = bcrypt.compareSync(password, userDoc.password);
        if (passok) {
            res.json("Found");
        } else {
            res.status(422).json("Pass not ok");
        }
    } else {
        res.json("Not Found");
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Hello, this is your Express server!");
});

// Set up the server to listen
const PORT = process.env.PORT || 3000; // Use the environment variable PORT if available, otherwise default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
