import User from "../model/user.model.js"
import { errorHandler } from "../utils/error.js"

export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    try{
        const newUser = new User({username, email, password});
        await newUser.save();
        res.status(201).json('user created succefully...!');

    } catch ( error ) {
        next(error);
    }
 }