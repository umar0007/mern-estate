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
    },

    avatar:{
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.personality-insights.com%2Fdefault-profile-pic%2F&psig=AOvVaw2toHBGqKatuNR-InNSkvTC&ust=1696846368194000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC5trub5oEDFQAAAAAdAAAAABAE'
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;