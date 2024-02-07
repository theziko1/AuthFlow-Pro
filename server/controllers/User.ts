import { User } from "../models/User";
import { Request , Response } from "express";
import { genSalt , hash , compare} from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from "dotenv";

config()

export const SignUp = async (req : Request, res : Response) => {
    try {
        const { username , email , password} = req.body
        const salt = await genSalt(10)
        const hashPassword = await hash(password,salt)
        await User.create({
           username, email , password: hashPassword
        })
        res.status(201).json({success : true, message : "User registered successfully"})
    } catch (error) {
        res.status(500).json({success : false, error : "User not registered "+error})
    }
    
}

export const SignIn = async (req : Request , res : Response) => {
       try {
        const { username , password} = req.body
        const UserLogin = await User.findOne({ username })
        if(!UserLogin) {
            return res.status(401).json({success : false,error : "Authentication failed"})
          }
          const MatchedPass = compare(password,UserLogin.password as string)
          if (!MatchedPass) {
             return res.status(401).json({success : false, error : "Authentication failed"})
          }
          const token = jwt.sign({ userId: UserLogin._id }, process.env.SECRET_KEY as string, {
             expiresIn: '6h',
             });
          res.cookie('token',token)   
          res.status(200).json({ success : true, message : "login successfully", data : token}) 
       } catch (error) {
        res.status(500).json({error : "login failed "+error})
       }
}

export const logout = (req : Request , res : Response) => {
    try {
       res.clearCookie('token')
       res.status(200).json({success : true, message : "logged out"})
    } catch (error) {
       res.status(500).json({success : false, error : "something went wrong "+error})
    }
 }