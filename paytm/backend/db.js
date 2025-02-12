const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shubhamsharma639615:admin123@cluster0.vvqg6.mongodb.net/paytm");

//creating schema for Users
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

//create a model from schema
const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema);

module.exports = {
    User,
    Account
};