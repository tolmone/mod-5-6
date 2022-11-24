const mongoose = require('mongoose');

//Schema 
const UserSchema = new mongoose.Schema(
    { 
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type : String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type : String,
            required: false
        },
        dateofbirth:{
            type: Date,
            required: false
        },
        avatar:{
            type: String,
            required:false
        },
        dateCreated:{
            type: Date,
            required:false,
            default: Date.now
        }
    }
)


//Model
const UserModel = mongoose.model('users', UserSchema);

//Export the model
module.exports = UserModel;