const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    difficulty:String,
    score:Number
})
const UserModel = mongoose.model("user",userSchema)
module.exports = {UserModel}