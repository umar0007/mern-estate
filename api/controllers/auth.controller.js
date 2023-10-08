import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    try{
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = await User({username, email, password: hashPassword});
        await newUser.save();
        res.status(201).json('user created succefully...!');

    } catch ( error ) {
        next(error);
    }
 }

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'user not found...!'));
        const validPassword = bcryptjs.compareSync (password,  validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials...!'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass,  ...rest} = validUser._doc ;
        res.cookie('access token', token, { httpOnly : true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    
    try{
        const user = await User.findOne({email: req.body.email});
        if(user) {
            console.log("asdf");
            const token = jwt.sign({id: user._id},  process.env.JWT_SECRET);
            const {password, ...rest} = user._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }else{
            console.log("asdf");
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const newUser = new User({username: req.body.name + Math.random().toString(36).slice(-8), password: hashedPassword, email: req.body.email, avatar: req.body.photo});
            await newUser.save();
            const {password, ...rest} = newUser._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
            
        }
    } 
    catch(error){
        console.log("getting error...!", error.message)
    }
}