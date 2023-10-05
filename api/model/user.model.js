import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        required: true,
        type: string,
        unique: true
    },

    email:{
        required: true,
        type: string,
        unique: true
    },
 
    password:{
        required: true,
        type: string
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;