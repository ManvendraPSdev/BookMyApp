const mongoose = require("mongoose");
const {Schema} = mongoose ;
// Creating the Schema for the the Database 

const UserSchema = new Schema({
    name : String ,
    email : {type : String , unique : true} ,
    password : String 
}) ;

const UserModel = mongoose.model('User' , UserSchema) ;
module.exports = UserModel ;

// const mongoose = require("mongoose");

// // mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// // .env
// mongoose("mongodb+srv://welcome2github:ouEDX4iJjvgnSsFD@cluster0.3iht2xu.mongodb.net/?retryWrites=true&w=majority")
// const UserSchema = mongoose.Schema({
//     email : {type : String , unique : true} ,
//     password : String 
// })

// const UserModel = mongoose.model('User', UserSchema);

// module.exports = {
//     UserModel
// }