import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        required: true,
        type: String,
        unique: true
    },

    email:{
        required: true,
        type: String,
        unique: true
    },
 
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;