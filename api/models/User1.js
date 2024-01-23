const mongoose = require("mongoose");
const {Schema} = mongoose ;
// Creating the Schema for the the Database 

const UserSchema = new mongoose.Schema({
    email : {type : String , unique : true} ,
    password : String 
}) ;

const UserModel = mongoose.model('User' , UserSchema) ;
module.exports = UserModel ;