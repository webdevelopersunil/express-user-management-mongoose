const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});

//  compiling our schema into a Model.
const User = mongoose.model('User',UserSchema);

module.exports = User;